  

// Routes for Expenses (routes/expenses.js)
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const auth = require('../middleware/auth');

// Apply auth middleware to all expense routes
router.use(auth);

// @route   GET api/expenses
// @desc    Get all user's expenses
// @access  Private
router.get('/', expenseController.getExpenses);

// @route   POST api/expenses
// @desc    Add new expense
// @access  Private
router.post('/', expenseController.addExpense);

// @route   PUT api/expenses/:id
// @desc    Update expense
// @access  Private
router.put('/:id', expenseController.updateExpense);

// @route   DELETE api/expenses/:id
// @desc    Delete expense
// @access  Private
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;