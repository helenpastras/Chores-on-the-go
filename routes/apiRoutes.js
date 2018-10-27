// var db = require("../models");
// var request = require("request");

// module.exports = function (app) {
//   // Get all examples
//   app.get("/api/user", function (req, res) {
//     db.User.findAll({
//       where: {
//         HouseId: req.params.id
//       }
//     }).then(function (roommateChores_db) {
//       res.json(roommateChores_db);
//     });
//   });
//   // Create a new user
//   app.post("/api/user", function (req, res) {
//     db.User.create(req.body).then(function (roommateChores_db) {
//       res.json(roommateChores_db);
//     });
//   });
  
  
//   // Delete an example by id
//   app.delete("/api/user/:id", function (req, res) {
//     db.User.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function (roommateChores_db) {
//       res.json(roommateChores_db);
//     });
//   });

//   // search Chores table by the user's id

//   app.get("/api/profile/:id", function (req, res) {
//     db.Chores.query("SELECT Roommates.username,Chores.choreName, Chores.completed, Chores.CompletedAt" , 
//     "FROM Roommates, Chores",
//     "WHERE Chores.RoommateId = Roommates.id;").then(function (roommateChores_db) {
//       res.json(roommateChores_db);
//       console.log(roommateChores_db);
//     });
//   });
// };
