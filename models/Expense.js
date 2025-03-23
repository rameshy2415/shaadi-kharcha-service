// Expense Model (models/Expense.js)
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Venue', 'Catering', 'Decoration', 'Attire', 'Photography', 'Entertainment', 'Transport', 'Other']
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  paidBy: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['Cash', 'Credit Card', 'Bank Transfer', 'Check', 'Other'],
    default: 'Cash'
  },
  notes: String,
  receipt: String // URL to uploaded receipt image
});

const Expense = mongoose.model('Expense', ExpenseSchema);
module.exports = Expense;