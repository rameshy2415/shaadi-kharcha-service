// Expense Model (models/Expense.js)
const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Venue",
      "Catering",
      "Decoration",
      "Attire",
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
