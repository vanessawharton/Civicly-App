const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET subcategory route
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
    SELECT * FROM "Subcategories"
    `;
    pool
      .query(queryText)
      .then(result => res.send(result.rows))
      .catch(err => {
        console.log('Error making get request for chores', err);
        res.sendStatus(500);
      })

});

/**
 * POST subcategory route
 */
router.post('/', rejectUnauthenticated, (req, res) => {


});

/**
 * PUT subcategory route 
 */
router.put('/', rejectUnauthenticated, (req, res) => {


});

/**
 * DELETE subcategory route
 */
router.delete('/', rejectUnauthenticated, (req, res) => {


});

module.exports = router;