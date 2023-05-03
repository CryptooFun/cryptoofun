// Packages
const { setTimeout } = require('timers/promises');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const grpcServer = require('./grpc/server');
const grpc = require('@grpc/grpc-js');

// express
const express = require('express');
const app = express();

// Routers
const portfolioRouter = require('./routers/portfolioRoutes');

app.use(helmet());
app.use(cors());
app.use(xss());
app.use(express.json());

app.use('/', portfolioRouter);

let httpServerInstance;
const port = process.env.PORT || 5001;
const start = async () => {
  try {
    httpServerInstance = app.listen(port, () =>
      console.log(`[info] http server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

const grpcAddress = `0.0.0.0:${process.env.GRPC_SERVER_PORT || 50052}`;
const grpcStart = async () => {
  grpcServer.bindAsync(grpcAddress, grpc.ServerCredentials.createInsecure(), () => {
    grpcServer.start();
    console.log(`[info] grpc server is listening on ${grpcAddress}...`);
  });
};

process.on('SIGTERM', async () => {
  console.log('[info] shutting down the service...');
  httpServerInstance.close(err => {
    if (err) {
      console.error('[error] an error occured while closing the http server:', err);
    }

    grpcServer.tryShutdown(err => {
      if (err) {
        console.error('[error] an error occured while closing the grpc server:', err);
      }
      console.log('[info] gracefully terminated the service');
      process.exit(0);
    });
  });

  await setTimeout(15000); // Give 15 seconds for graceful termination
  console.log("[error] couldn't shut down the service gracefully, forced to exit!");
  process.exit(1);
});

grpcStart();
start();
