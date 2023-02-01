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
    const query = `SELECT * FROM
    "Ticket";`;
  
  pool.query(query)
    .then( result => {
      console.log('GET IT!!', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all tickets', err);
      res.sendStatus(500)
    })
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

module.exports = router;