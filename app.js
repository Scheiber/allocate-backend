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
  res.send(
    `<h1 style="text-align:center; color:#2ECC40; font-family: 'Helvetica', 'Arial', sans-serif; font-size:50px;">$$$</h1>
    <h1 style="text-align:center; font-family: 'Helvetica', 'Arial', sans-serif;">Welcome to the Allocate Backend!</h1>
    <p style="text-align:center; font-family: 'Helvetica', 'Arial', sans-serif;"><a href="https://github.com/Scheiber/allocate-backend">Find out more.</a><p/>`
  );
});

app.use("/transactions", transactionsController);

// Error
app.get("*", (req, res) => {
  res.status(404).json({ error: "Error 404: Not Found" });
});

// Export
module.exports = app;
