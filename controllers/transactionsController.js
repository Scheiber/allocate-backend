const express = require("express");
const transactions = express.Router();
const transactionsData = require("../models/transactions.js");

// Index: Get a list (or index) of all transactions
transactions.get("/", (req, res) => {
  if (transactionsData) {
    res.json(transactionsData);
  } else {
    res.redirect("/*");
  }
});

// Show: Get an individual view (show one transactions)
transactions.get("/:arrayIndex", (req, res) => {
  console.log(req.params);
  const { arrayIndex } = req.params;
  if (transactionsData[arrayIndex]) {
    res.json(transactionsData[arrayIndex]);
  } else {
    res.redirect("/*");
  }
});

// Create: Create a new transaction
transactions.post("/", (req, res) => {
  transactionsData.push(req.body);
  res.json(transactionsData[transactionsData.length - 1]);
});

// Destroy: delete a transaction
transactions.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (transactionsData[arrayIndex]) {
    const deletedTransaction = transactionsData.splice(arrayIndex, 1);
    res.status(200).json(deletedTransaction);
  } else {
    res.redirect("/*");
  }
});

// Update: update a transaction
transactions.put("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (transactionsData[arrayIndex]) {
    transactionsData[arrayIndex] = req.body;
    res.status(200).json(transactionsData[arrayIndex]);
  } else {
    res.redirect("/*");
  }
});

module.exports = transactions;
