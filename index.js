// Server setup (app.js)
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Connect to MongoDB
connectDB();

//app.options("*", cors());

// // CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-auth-token"
  );
  res.header("Access-Control-Allow-Credentials", "true");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// Initialize Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/expenses", require("./routes/expenses"));
app.use("/api/receivemoney", require("./routes/receiveMoney"));
app.use("/api/sent-mail", require("./routes/emailUs"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  //console.log("Config", process.env.EMAIL_SERVICE);
});

// import fs from 'node:fs/promises';

// import bodyParser from 'body-parser';
// import express from 'express';
// const router = express.Router();
// const authController = require('../controllers/authController');
// const auth = require('../middleware/auth');

// const app = express();

// app.use(express.static('images'));
// app.use(bodyParser.json());

// // CORS
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
//   res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   next();
// });

// // 404
// app.use((req, res, next) => {
//   if (req.method === 'OPTIONS') {
//     return next();
//   }
//   res.status(404).json({ message: '404 - Not Found' });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
