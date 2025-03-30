// Routes for Authentication (routes/auth.js)
const express = require('express');
const router = express.Router();
const emailUsController = require('../controllers/emailUsController');


// @route   POST api/sent-mail/
// @desc    Sent an Email
// @access  Public
router.post('/', emailUsController.sentAnEmail);

module.exports = router;