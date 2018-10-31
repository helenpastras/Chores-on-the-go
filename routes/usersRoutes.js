// Require all models
const db = require("../models");
const express = require('express');
const app = express.Router();

//Limit view to users of the house

// Get all Roomates:
app.get("/api/user", function (req, res) {
  db.User.findAll({
    where: {
      id: req.user.id,
      HouseId: req.user.HouseId
    }
  }).then(function (roommateChores_db) {
    res.json(roommateChores_db);
  });
});

app.post("/submit", function (req, res) {
  // Create a new Roommate in the database
  db.Roommate.create(req.body)
    .then(function (dbRoommate) {
      // If a Roommate was created successfully, find one House  and push the new Roommate's _id to the House's `Roommates` array
      // { new: true } tells the query that we want it to return the updated Houses -- it returns the original by default

      return db.Houses.findOneAndUpdate({}, {
        $push: {
          Roommate: dbRoommate._id
        }
      }, {
        new: true
      });
    })
    .then(function (dbHouses) {
      // If the House was updated successfully, send it back to the client
      res.json(dbHouses);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Delete an example by id
app.delete("/api/user/:id", function (req, res) {
  db.Roommate.destroy({
    where: {
      id: req.user.id
    }
  }).then(function (roommateChores_db) {
    res.json(roommateChores_db);
  });
});

// search Chores table by the user's id

app.get("/api/profile/:id", function (req, res) {
  db.Chores.query("SELECT Roommate.username,Chores.choreName, Chores.completed, Chores.CompletedAt",
    "FROM Roommate, Chores",
    "WHERE Chores.RoommateId = Roommate.id;").then(function (roommateChores_db) {
    res.json(roommateChores_db);
    console.log(roommateChores_db);
  });
});

module.exports = app;