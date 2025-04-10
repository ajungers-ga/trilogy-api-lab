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


// 6.0 Routes tbd

// 6.1 CREATE - POST - /trilogies
// add new trilogy
app.post('/trilogies', async (req, res) => {
    try {
        const createdTrilogy = await Trilogy.create(req.body);
        res.json(createdTrilogy);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 6.2 READ - GET - /trilogies
// retrieve all trilogies
app.get('/trilogies', async (req, res) => {
    try {
        const foundTrilogies = await Trilogy.find();
        res.json(foundTrilogies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 6.3 DELETE - DELETE - /trilogies/:id
// delete trilogy by ID
app.delete('/trilogies/:id', async (req, res) => {
    try {
        const deletedTrilogy = await Trilogy.findByIdAndDelete(req.params.id);
        res.json(deletedTrilogy);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 6.4 UPDATE - PUT - /trilogies/:id
// update trilogy by ID
app.put('/trilogies/:id', async (req, res) => {
    try {
      const updatedTrilogy = await Trilogy.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } 
      );
      res.json(updatedTrilogy);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

// 7. Start server
app.listen(3000, () => {
    console.log('The express app is ready!');
});
