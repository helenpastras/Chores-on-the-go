// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ExampleSchema object
// This is similar to a Sequelize model
var HouseAccountSchema = new Schema({

    groupName: {
        type: String,
        unique: true,
        required: true,
        // (merge from Group tbl)
    },
    contactFirstName: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },
    contactLastName: {
        type: String,
        trim: true,
        required: "Last Name is Required"
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        primary: true,
        key: true
    },
    password: {
        // tba
    },
    
        collection: "HouseAccount"
  //will need to be linked with the users (roommateSchema)
});

// This creates our model from the above schema, using mongoose's model method
var HouseAccount = mongoose.model("HouseAccount", HouseAccountSchema);


// Export the Example model
module.exports = HouseAccount;
