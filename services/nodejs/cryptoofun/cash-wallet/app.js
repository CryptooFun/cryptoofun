// Security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');

// express
const express = require('express');
const app = express();

// database
const prisma = require('./db/dbConnect.js');

// Routers
const walletRouter = require('./routers/walletRoutes')

app.use(helmet());
app.use(cors());
app.use(xss());
app.use(express.json());

app.use('/', walletRouter);

const port = process.env.PORT || 5000;
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