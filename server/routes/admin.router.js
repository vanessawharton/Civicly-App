const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET admin route
 */
router.get('/', rejectUnauthenticated, (req, res) => {


});

/**
 * POST admin route
 */
router.post('/', rejectUnauthenticated, (req, res) => {


});

/**
 * PUT admin route 
 */
router.put('/', rejectUnauthenticated, (req, res) => {


});

/**
 * DELETE admin route
 */
router.delete('/', rejectUnauthenticated, (req, res) => {


});

module.exports = router;