// Require all models
// var db = require("../models");

//limit view to users of the house

// // POST route for saving a new Roommate to the db and associating it with a House
// app.post("/submit", function(req, res) {
//   // Create a new Roommate in the database
//   db.Roommates.create(req.body)
//     .then(function(dbRoommates) {
//       // If a Roommate was created successfully, find one House  and push the new Roommates's _id to the House's `Roommatess` array
//       // { new: true } tells the query that we want it to return the updated Houses -- it returns the original by default
//      
//       return db.Houses.findOneAndUpdate({}, { $push: { Roommatess: dbRoommates._id } }, { new: true });
//     })
//     .then(function(dbHouses) {
//       // If the House was updated successfully, send it back to the client
//       res.json(dbHouses);
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// });

// // Route for getting all Roommatess from the db
// app.get("/Roommatess", function(req, res) {
//   // Using our Roommates model, "find" every Roommates in our db
//   db.Roommates.find({})
//     .then(function(dbRoommates) {
//       // If any Roommatess are found, send them to the client
//       res.json(dbRoommates);
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// });






// // Route for getting all Houses from the db
// app.get("/Houses", function(req, res) {
//   // Using our Houses model, "find" every Houses in our db
//   db.Houses.find({})
//     .then(function(dbHouses) {
//       // If any Houses are found, send them to the client
//       res.json(dbHouses);
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// });

// // Route to see what Houses looks like WITH populating
// app.get("/populated", function(req, res) {
//   // Using our Houses model, "find" every Houses in our db and populate them with any associated Roommatess
//   db.Houses.find({})
//     // Specify that we want to populate the retrieved Houses with any associated Roommatess
//     .populate("Roommatess")
//     .then(function(dbHouses) {
//       // If any Houses are found, send them to the client with any associated Roommatess
//       res.json(dbHouses);
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// });
