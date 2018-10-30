// Require all models
const db = require("../models");
const express = require('express');
const app = express.Router();


// Route for getting all Houses from the db
app.get("/Houses", function(req, res) {
  // Using our Houses model, "find" every Houses in our db
  db.Houses.find({})
    .then(function(dbHouses) {
      // If any Houses are found, send them to the client
      res.json(dbHouses);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route to see what Houses looks like WITH populating
app.get("/populated", function(req, res) {
  // Using our Houses model, "find" every Houses in our db and populate them with any associated Roommate
  db.Houses.find({})
    // Specify that we want to populate the retrieved Houses with any associated Roommate
    .populate("Roommate")
    .then(function(dbHouses) {
      // If any Houses are found, send them to the client with any associated Roommate
      res.json(dbHouses);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

module.exports = app;
