// Packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const grpcServer = require('./grpc/server');
const grpc = require('@grpc/grpc-js');

// express
const express = require('express');
const app = express();

// Routers
const portfolioRouter = require('./routers/portfolioRoutes')

app.use(helmet());
app.use(cors());
app.use(xss());
app.use(express.json());

app.use('/', portfolioRouter);

const port = process.env.PORT || 5001;
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

const grpcStart = async () => {
  grpcServer.bindAsync('0.0.0.0:50052', grpc.ServerCredentials.createInsecure(), () => {
    grpcServer.start();
    console.log(`grpc server is listening...`)
  });
};

grpcStart();
start();