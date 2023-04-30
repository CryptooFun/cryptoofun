// Packages
require('dotenv').config();
const cors = require('cors');
const path = require('path');

// express
const express = require('express');
const app = express();

const { seedDb } = require('./db');

// Setup routes
app.use(cors());
require('./routes')(app);

// Seed redis db
seedDb();

const port = process.env.PORT || 5002;

const start = async () => {
    try {
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
};

start();


