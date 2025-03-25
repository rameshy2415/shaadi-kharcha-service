// Routes for Expenses (routes/expenses.js)
const express = require('express');
const router = express.Router();
const receivedMoneyController = require('../controllers/receivedMoneyController');
const auth = require('../middleware/auth');

// Apply auth middleware to all expense routes
router.use(auth);

// @route   GET api/expenses
// @desc    Get all user's expenses
// @access  Private
router.get('/', receivedMoneyController.getReceiveMoney);

// @route   POST api/expenses
// @desc    Add new expense
// @access  Private
router.post('/', receivedMoneyController.addReceiveMoney);

// @route   PUT api/expenses/:id
// @desc    Update expense
// @access  Private
router.put('/:id', receivedMoneyController.updateReceiveMoney);

// @route   DELETE api/expenses/:id
// @desc    Delete expense
// @access  Private
router.delete('/:id', receivedMoneyController.deleteReceiveMoney);

module.exports = router;