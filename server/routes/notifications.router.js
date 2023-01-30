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