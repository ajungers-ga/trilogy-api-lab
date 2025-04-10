// seed.js - Seeder script to populate trilogy database
//
// Purpose: Adds predefined entries to the trilogy collection using Mongoose's create method.
// This script is a lightweight way to add trilogies without needing to use fetch requests at a safe site like...
// ... (example.com) which is what i used to CREATE and DELETE batman, UPDATE the matrix trilogy
//
// let the record show that the original stars wars trilogy is the GOAT.
// Honorable mention to the first 3 Indiana Jones films and Toy Story

// 1. Load environment variables
require('dotenv').config();

// 2. Import dependencies
const mongoose = require('mongoose');
const Trilogy = require('./models/trilogy.js');

// 3. Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// 4. Define seed data
const trilogies = [
  {
    title: 'The Bourne Trilogy',
    director: 'Doug Liman / Paul Greengrass',
    releaseYears: [2002, 2004, 2007],
    genre: 'Action/Thriller',
    isComplete: true
  },
  {
    title: 'The Hangover Trilogy',
    director: 'Todd Phillips',
    releaseYears: [2009, 2011, 2013],
    genre: 'Comedy',
    isComplete: true
  }
];

// 5. Define seed logic
async function seed() {
  try {
    for (let trilogy of trilogies) {
      await Trilogy.create(trilogy);
    }
    console.log('Seed complete.');
  } catch (err) {
    console.error('Seeding error:', err);
  }
}

// 6. Run the seed function
seed();
