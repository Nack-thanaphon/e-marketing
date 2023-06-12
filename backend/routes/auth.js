const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Hardcoded username and password
const username = 'admin';
const password = '1234';

// Authentication route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the provided username and password are valid
  if (username === 'admin' && password === '1234') {
    // Generate a JWT token
    const token = jwt.sign({ username }, 'secret-key', { expiresIn: '1h' });

    // Return the token as the response
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
