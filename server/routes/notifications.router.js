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
        req.body.timestamp,
        req.body.status
    ];

    const queryText = `INSERT INTO "Notifications" ("user_id", "ticket_id", "comments", "timestamp", "notification_status")
        VALUES ($1, $2, $3, $4, $5) ;`;


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
router.put('/', rejectUnauthenticated, (req, res) => {


});

/**
 * DELETE notifications route
 */
router.delete('/', rejectUnauthenticated, (req, res) => {


});

module.exports = router;