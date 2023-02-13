const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET notifications route
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const query = 
    `SELECT * FROM "Notifications"
    WHERE "user_id" = $1
    ORDER BY "timestamp" DESC;`;

    pool.query(query, [req.user.id])
        .then(result => {
            console.log('GET NOTIFICATIONS  ', result.rows)
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all notifications', err);
            res.sendStatus(500)
        })


});

/**
 * POST notifications route
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('this is req.body in router.post /notifications', req.body);
    const queryVals = [
        req.body.user_id,
        req.body.ticket_id,
        req.body.comments,
        req.body.status
    ];

    const queryText = `INSERT INTO "Notifications" ("user_id", "ticket_id", "comments", "timestamp", "notification_status")
        VALUES ($1, $2, $3, now(), $4) ;`;


    pool.query(queryText, queryVals)
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error posting to Notifications table', error);
            res.sendStatus(500)
        })
});

/**
 * PUT notifications route 
 */
router.put('/hidenotification', rejectUnauthenticated, (req, res) => {
    console.log('in notification.router PUT', req.body.status);

    let queryParams = [req.body.is_hidden, req.body.id]

    let queryText = `
        UPDATE "Notifications"
        SET "is_hidden" = $1
        WHERE "id" = $2;`;

    pool.query(queryText, queryParams)
        .then((results) => res.sendStatus(200))
        .catch(err => {
            res.sendStatus(500)
            console.log(err);
        })
});

/**
 * DELETE notifications route
 */
router.delete('/', rejectUnauthenticated, (req, res) => {


});

module.exports = router;