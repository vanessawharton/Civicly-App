const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET ticket route
 */
router.get('/', rejectUnauthenticated, (req, res) => {


});

/**
 * POST ticket route
 */
router.post('/', rejectUnauthenticated, (req, res) => {


});

/**
 * PUT ticket route 
 */
router.put('/', rejectUnauthenticated, (req, res) => {


});

/**
 * DELETE ticket route
 */
router.delete('/', rejectUnauthenticated, (req, res) => {


});

//Admin get all tickets route
router.get('/alltickets', rejectUnauthenticated, (req, res) => {

     const queryText = `SELECT * FROM "Ticket"`

    pool.query(queryText)
    .then((results) => {
        res.send(results.rows)
    })   
    .catch((error) => {
        console.log('Error getting all tickets', error);
        res.sendStatus(500);
    })
});

module.exports = router;