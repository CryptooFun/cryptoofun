// Packages
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const { CronJob } = require('cron');

// express
const express = require('express');
const app = express();

const job = new CronJob('*/5 * * * *', require('./leaderboardConstructor'), null, true);

// Routers
const leaderboardRouter = require('./leaderboardRoute');

app.use(cors());

app.use('/', leaderboardRouter);

const port = process.env.PORT || 5003;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
