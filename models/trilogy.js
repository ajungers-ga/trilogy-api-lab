// models/trilogy.js - Mongoose Trilogy Model
//
// Purpose: Defines the schema for a movie trilogy resource,
// including basic validations and useful fields for display.

const mongoose = require('mongoose');

// 1. Define schema
const trilogySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: String,
  releaseYears: {
    type: [Number]
  },
  genre: String,
  isComplete: {
    type: Boolean,
    default: true
  }
});

// 2. Create the model
const Trilogy = mongoose.model('Trilogy', trilogySchema);

// 3. Export the model
module.exports = Trilogy;
