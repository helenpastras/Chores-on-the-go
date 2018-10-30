// Require all models
const db = require("../models");
const express = require('express');
const app = express.Router();

// Get all the Chores for the Roommate's House: 
app.get("/api/chores", function (req, res) {
    db.Chores.findAll({
        include: [db.Houses]
        // where:{
        //     HouseiD:req.params.id,
        // }
    }).then(function (dbChores) {
        res.json(dbChores);
    });
});

app.get("/api/chores/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Chores.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Houses],
        include: [db.Roommate]
    }).then(function (dbChores) {
        res.json(dbChores);
    });
});
// Create a new example
app.post("/api/add", function (req, res) {
    db.Chores.create(req.body).then(function (dbChores) {
        res.json(dbChores);
    });
});

// Delete an example by id
app.delete("/api/chores/:id", function (req, res) {
    db.Chores.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbChores) {
        res.json(dbChores);
    });
});
module.exports = app;