// server.js - Express API Entry Point
//
// Purpose: This file sets up the express app with full CRUD
// routes for a movie trilogy resource using MongoDB.
// Includes CORS and morgan support for development use.
//
// If the app had multiple resources, I would extract route logic
// into controller files using MVC structure.

// 1. Load environment variables
const dotenv = require('dotenv');
dotenv.config();

// 2. Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const Trilogy = require('./models/trilogy.js');

// 3. Create Express app
const app = express();

// 4. Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// 5. Middleware
app.use(express.json());  // Parse JSON request bodies
app.use(cors());          // Enable cross-origin requests
app.use(morgan('dev'));   // Log incoming requests to terminal

// 6.0 Routes (to be added soon)

// 7. Start server
app.listen(3000, () => {
  console.log('The express app is ready!');
});
