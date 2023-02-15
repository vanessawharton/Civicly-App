const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const zipcode = req.body.zipcode;
  console.log(req.body);

  const queryText = `INSERT INTO "User" (username, password, zipcode)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, zipcode])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

// PUT router for the profile image upload for users
router.put('/profileImage', (req, res) => {
  console.log('user profile image router: ', req.body.image_url);
  const query = `UPDATE "User"
  SET "image_url" = $1
  WHERE "id" = $2;`
  pool
  .query(query, [req.body.image_url, req.user.id])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('User image profile failed: ', err);
    res.sendStatus(500);
  });
  
})

module.exports = router;
