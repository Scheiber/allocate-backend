// Dependencies
const express = require("express");
const cors = require("cors");

// Config
const app = express();

// Middleware to enable CORS on server
app.use(cors());

// Middleware that turns JSON into usable JS
app.use(express.json());

const transactionsController = require("./controllers/transactionsController.js");

// Routes
app.get("/", (req, res) => {
  res.send(`<h1 style='text-align:center;'>Welcome to Allocate!</h1>`);
});

app.use("/transactions", transactionsController);

// Error
app.get("*", (req, res) => {
  res.status(404).json({ error: "Error 404: Not Found" });
});

// Export
module.exports = app;
