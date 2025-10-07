const express = require('express');
const { body } = require('express-validator');
const { registerWatchUser, loginWatchUser } = require('../controllers/authController');

const router = express.Router();

// Register Route
router.post(
  '/register',
  [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Valid email is required').isEmail(),
    body('password', 'Password of 6+ chars required').isLength({ min: 6 }),
  ],
  registerWatchUser
);

// Login Route
router.post(
  '/login',
  [
    body('email', 'Valid email is required').isEmail(),
    body('password', 'Password is required').exists(),
  ],
  loginWatchUser
);

module.exports = router;
