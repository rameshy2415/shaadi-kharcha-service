// Expense Model (models/Expense.js)
const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Attire",
      "Utensils",
      "Venue",
      "Catering",
      "Decoration",
      "Photography",
      "Entertainment",
      "Transportation",
      "Gifts",
      "Other",
    ],
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: new Date().toISOString().split("T")[0]
  }
});

const Expense = mongoose.model("Expense", ExpenseSchema);
module.exports = Expense;
