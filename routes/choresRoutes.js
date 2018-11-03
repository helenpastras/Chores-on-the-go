// Require all models
const db = require("../models");
const express = require('express');
const app = express.Router();
var Router = require('../routes');

// Get all the Chores for the Roommate's House: 
app.get("/chores", function (req, res) {
    db.Chores.findAll({
        include: [db.Houses]
        // where:{
        //     HouseiD:req.params.id,
        // }
    }).then(function (dbChores) {
        res.json(dbChores);
    });
});

app.get("/chores/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Chores.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Houses, db.Roommate]
    }).then(function (dbChores) {
        res.json(dbChores);
    });
});
// Create a new example
app.post("/add", function (req, res) {
    db.Chores.create({
        choreName: req.body.choreName,
        choreRoom: req.body.choreRoom,
        dueDate: req.body.dueDate,
        description: req.body.description,
        assignee: req.body.assignee
    }).then(function (dbChores) {
        res.json(dbChores);
    });
});

app.put("/chores", function (req, res) {
    if (req.body.Chores) {
        db.Chores.update({
            completed: true, 
            dateCompleted: Date
        }, {
            where: {
                id: req.body.Chores_id
            }
        })
        .then(function(dbChores) {
          res.json("/");
        });
    }
  });
  
  
                // Delete an example by id
                app.delete("/chores/:id", function (req, res) {
                    db.Chores.destroy({
                        where: {
                            id: req.params.id
                        }
                    }).then(function (dbChores) {
                        res.json(dbChores);
                    });
                });
                module.exports = app;