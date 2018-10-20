const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

//WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/roommateChores"
);

const Roommate =  [
    {
        "username": "randy",
        "firstName": "Randy",
        "lastName": "Randalphs",
        "email": "randy@me.com",
        "password": "1234qwer",
        "groupName": "4414Sherman-322",
        "active": "true",
        "dateAdded": 20181010
    },
    {
        "username": "annaBana",
        "firstName": "Anna",
        "lastName": "Bana",
        "email": "annabana@me.com",
        "password": "1234asdf",
        "groupName": "4414Sherman-322",
        "active": "true",
        "dateAdded": 20181011
        },
    {
        "username": "joe",
        "firstName": "joe",
        "lastName": "smith",
        "email": "jsmith@gmail.com",
        "password": "1234zxcv",
        "groupName": "14069Marquis-322",
        "active": "true",
        "dateAdded": 20180909
        },

];
db.roommateChores
.remove({})
.then(() => db.roommateChores.collection.insertMany(Roommate))
.then(data => {
console.log(data);
console.log(data.insertedCount + " records inserted!");
process.exit(0);
})
.catch(err => {
console.error(err);
process.exit(1);
});