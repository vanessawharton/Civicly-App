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