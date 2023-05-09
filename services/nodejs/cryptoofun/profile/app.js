#!/usr/bin/env node

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}

const { setTimeout } = require('timers/promises');
const { grpcServer } = require('./grpc');
const grpc = require('@grpc/grpc-js');

const grpcAddress = `0.0.0.0:${process.env.GRPC_SERVER_PORT || 50053}`;
async function grpcStart() {
  grpcServer.bindAsync(grpcAddress, grpc.ServerCredentials.createInsecure(), () => {
    grpcServer.start();
    console.log(`[info] grpc server is listening on ${grpcAddress}...`);
  });
}

process.on('SIGTERM', async () => {
  console.log('[info] shutting down the service...');
  grpcServer.tryShutdown(err => {
    if (err) {
      console.error('[error] an error occured while closing the grpc server:', err);
    }
    console.log('[info] gracefully terminated the service');
    process.exit(0);
  });

  await setTimeout(15000); // Give 15 seconds for graceful termination
  console.log("[error] couldn't shut down the service gracefully, forced to exit!");
  process.exit(1);
});

grpcStart();
