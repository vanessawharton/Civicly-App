const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET tickets route by user desc order most recent
 */
router.get('/user/:id', rejectUnauthenticated, (req, res) => {
    const query = `SELECT "Ticket".*, "Subcategories"."name" AS "subcategory"
    FROM "Ticket"
    JOIN "Subcategories"
    ON "Subcategories"."id" = "Ticket"."subcategory_id"
    JOIN "User" 
    ON "User"."id" = "Ticket"."user_id"
    WHERE "user_id" = $1
    ORDER BY "id" DESC;`;

    pool.query(query, [req.user.id])
        .then(result => {
            // console.log('GET user_id tickets!!', result.rows)
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all user_id tickets', err);
            res.sendStatus(500)
        })
});

// GET a total count of upvotes column specific to user_id
router.get('/upvotes/:id', rejectUnauthenticated, (req, res) => {
    const query = `SELECT SUM ("upvotes")
    FROM "Ticket"
    WHERE "user_id" = $1;`;
    pool.query(query, [req.user.id])
        .then(result => {
            // console.log('MY SUUUUMM!!', result.rows)
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all upvotes by user_id', err);
            res.sendStatus(500)
        })
});

router.get('/ticketcount/:id', rejectUnauthenticated, (req, res) => {
    const query = `SELECT COUNT ("user_id")
    FROM "Ticket"
    WHERE "user_id" = $1;`;
    pool.query(query, [req.user.id])
        .then(result => {
            // console.log('MY COUNTTTT!!', result.rows)
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all upvotes by user_id', err);
            res.sendStatus(500)
        })
});

router.post('/', rejectUnauthenticated, (req, res) => {
    const queryValues = [req.body.imageUrl,
    req.body.description,
    req.body.status,
    req.body.upvotes,
    req.body.category_id,
    req.user.id,
    req.body.anonymous,
    req.body.subcategory_id,
    req.body.latitude,
    req.body.longitude]
    const query = `
    INSERT INTO "Ticket" ("image_url", "description", "status", "upvotes", "category", "user_id", 
                            "date", "anonymous", "subcategory_id", "latitude", "longitude")
    VALUES ($1, $2, $3, $4, $5, $6, now(), $7, $8, $9, $10) ;`;

    pool.query(query, queryValues)
        .then(result => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('ERROR: Could not Add ticket', err);
            res.sendStatus(500)
        })
});

//post route for inserting into notifications table when status is updated
router.post('/notifications', rejectUnauthenticated, (req, res) => {
    // console.log('this is req.body in router.post /notifications', req.body);
    const queryVals = [
        req.body.user_id,
        req.body.id,
        req.body.description,
        req.body.date,
        req.body.status
    ];

    const queryText = `INSERT INTO "Notifications" ("user_id", "ticket_id", "comments", "timestamp", "notification_status")
        VALUES ($1, $2, $3, now(), $4) ;`;

    pool.query(queryVals, queryText)
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error posting to Notifications table', error);
            res.sendStatus(500)
        })
});

/**
 * PUT ticket route 
 */
router.put('/upvote', rejectUnauthenticated, (req, res) => {
    // console.log('upvote router', req.body.location.upvotes + 1)
    const query = `UPDATE "Ticket"
    SET "upvotes" = $1
    WHERE "id" = $2`;
    pool.query(query, [req.body.location.upvotes + 1, req.body.location.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error PUTing upvote', error);
            res.sendStatus(500);
        })
});

router.put('/downvote', rejectUnauthenticated, (req, res) => {
    // console.log('downvote router', req.body.location.upvotes - 1)
    const query = `UPDATE "Ticket"
    SET "upvotes" = $1
    WHERE "id" = $2`;
    pool.query(query, [req.body.location.upvotes - 1, req.body.location.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error PUTing downvote', error);
            res.sendStatus(500);
        })
});

//Admin get all tickets route
router.get('/alltickets', rejectUnauthenticated, (req, res) => {

    const queryText = `SELECT "Ticket".*, "Subcategories"."name" AS "subcategory"
            FROM "Ticket"
            JOIN "Subcategories"
            ON "Subcategories"."id" = "Ticket"."subcategory_id"
            JOIN "User" 
            ON "User"."id" = "Ticket"."user_id"
            WHERE "status" != 'Closed'
            ORDER BY "id" DESC;`;

    pool.query(queryText)
        .then(result => {
            const tickets = result.rows
            const returnTickets = tickets.map(element => {
                // console.log(element.date);
                switch (element.category) {
                    case '0':
                        return { ...element, categoryName: 'Accessibility'}
                    case '1':
                        return { ...element, categoryName: 'Animal Control' }
                    case '2':
                        return { ...element, categoryName: 'Biking' }
                    case '3':
                        return { ...element, categoryName: 'Garbage and Recycling' }
                    case '4':
                        return { ...element, categoryName: 'Graffiti' }
                    case '5':
                        return { ...element, categoryName: 'Health and Environmental' }
                    case '6':
                        return { ...element, categoryName: 'Parking' }
                    case '7':
                        return { ...element, categoryName: 'Property' }
                    case '8':
                        return { ...element, categoryName: 'Sidewalks and Streets' }
                    default:
                        return { ...element };
                }

            });
            res.send(returnTickets);
        }).catch((error) => {
            console.log('Error getting all tickets', error);
            res.sendStatus(500);
        });
});
// 
router.put('/statusupdate', rejectUnauthenticated, (req, res) => {
    // console.log('in ticket.router PUT', req.body.status);

    let queryParams = [req.body.status, req.body.ticket_id]

    let queryText = `
        UPDATE "Ticket"
        SET "status" = $1
        WHERE "id" = $2;`;

    pool.query(queryText, queryParams)
        .then((results) => res.sendStatus(200))
        .catch(err => {
            res.sendStatus(500)
            console.log(err);
        })
});
module.exports = router;
