// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ExampleSchema object
// This is similar to a Sequelize model
var RoommateSchema = new Schema({

    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },

    firstName: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },
    lastName: {
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
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]

    },
    groupName: {
        type: Schema.Types.ObjectId,
        ref: "groupName"
    },

    active: {
        type: Boolean,
        default: true
    },

    dateAdded: {
        type: Date,
        default: Date.now
    }
    // collection :"Roommate"
});


// This creates our model from the above schema, using mongoose's model method
var Roommate = mongoose.model("Roommate", RoommateSchema);


// Export the Example model
module.exports = Roommate;