const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

//WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/roommateChores"
);

const Chores =  [
  {
      "choreName": "dishes",
      "choreRoom": "kitchen",
      "roommateName": "Randy",
      "completed": "false",
      "dueDate": 20181020,
      "description": "Wash dishes in sink and clear dryer rack after."
      
  },
  {
      
    "choreName": "vacuum house",
    "choreRoom": "entire house",
    "roommateName": "Anna",
    "completed": "false",
    "dueDate": 20181020,
    "description": "Vacuum the floors, entire apt."
      },
  {
    "choreName": "clean main bathroom",
    "choreRoom": "main bathroom",
    "roommateName": "Joe",
    "completed": "ture",
    "dueDate": 20181010,
    "dateCompleted": 20181011,
    "description": "Wash dishes in sink and clear dryer rack after."
  }
];
db.roommateChores
.remove({})
.then(() => db.roommateChores.collection.insertMany(Chores))
.then(data => {
console.log(data);
console.log(data.insertedCount + " records inserted!");
process.exit(0);
})
.catch(err => {
console.error(err);
process.exit(1);
});