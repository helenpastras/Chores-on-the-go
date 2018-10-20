// Require mongoose
const mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new ExampleSchema object
// This is similar to a Sequelize model
const ChoreSchema = new Schema({
  choreName: {
    type: String,
    trim: true,
    required:true
  },
  choreRoom: {
    type: String,
    required: true
  },
  roommateName: {
    // this name will need to have validateion from the RoomateInfo table
    type: Schema.Types.ObjectId,
    ref: "firstName"
  },
  completed: {
    type: Boolean,
    default: false
  },
  dueDate: {
    type: Date,
    default: Date.now
  },
  dateCompleted: {
    type: Date,
    // if (completed === true){
      default: Date.now,
    // }
  },
  description: {
    type: String,
    validate: [
      // Function takes in the new `longstring` value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 6;
      },
      // Error Message
      "Description should be longer."
    ]
  },
  
  collection: "Chores"

});

// This creates our model from the above schema, using mongoose's model method
const Chores = mongoose.model("Chores", ChoreSchema);

// Export the Example model
module.exports = Chores;
