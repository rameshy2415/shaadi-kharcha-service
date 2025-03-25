// ReceivedMoney Model (models/ReceivedMoney.js)
const mongoose = require("mongoose");
const ReceivedMoneySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: new Date().toISOString().split("T")[0],
  },
});

const ReceivedMoney = mongoose.model("ReceivedMoney", ReceivedMoneySchema);
module.exports = ReceivedMoney;
