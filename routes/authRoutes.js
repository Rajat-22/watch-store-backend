const express = require('express');
const { body } = require('express-validator');
const { registerWatchUser, loginWatchUser } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');

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

// example protected route
router.get('/all', protect, (req, res) => {
  res.json({ message: `Hello ${req.user.name}, your role is ${req.user.role}` });
});

// admin only
router.get('/admin-test', protect, admin, (req, res) => {
  res.json({ message: 'Welcome admin!' });
});

module.exports = router;
