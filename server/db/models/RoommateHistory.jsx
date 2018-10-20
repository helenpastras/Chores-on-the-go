// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;


// This table is a log of chore activies by user: each user will complete chores and they will be saved as separate entries under their email (userID)

// Using the Schema constructor, create a new ExampleSchema object
// This is similar to a Sequelize model
var RoommateHistorySchema = new Schema({

    firstName: {
        type: Schema.Types.ObjectId,
        ref: "firstName"
    },

    email: {
        type: Schema.Types.ObjectId,
        ref: "email"
    },

    active: {
        type: Boolean,
        default: true
    },

    dateAdded: {
        type: Date,
        default: Date.now
    }, 
    chores: {
        type: Schema.Types.ObjectId,
        ref: "choreName"
    },
    completed: {
        type: Schema.Types.ObjectId,
        ref: "completed"
    },
    dateCompleted: {
        type: Schema.Types.ObjectId,
        ref: "dateCompleted"
    },
    collection:"RoommateHistory"
});

// This creates our model from the above schema, using mongoose's model method
var RoommateHistory = mongoose.model("RoommateHistory", RoommateHistorySchema);


// Export the Example model
module.exports = RoommateHistory;
