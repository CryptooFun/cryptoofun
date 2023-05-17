const { setTimeout } = require('timers/promises');
const helmet = require('helmet');
const cors = require('cors');
const express = require('express');
const tasksManager = require('./tasks');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/', require('./handlers/lobby'));
app.use('/', require('./handlers/aftermath'));
app.use('/', require('./handlers/user'));

let httpServerInstance;
const port = process.env.PORT || 5004;
const start = async () => {
  try {
    tasksManager.start();

    httpServerInstance = app.listen(port, () =>
      console.log(`[info] http server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

process.on('SIGTERM', async () => {
  console.log('[info] shutting down the service...');

  tasksManager.stop();

  httpServerInstance.close(err => {
    if (err) {
      console.error('[error] an error occured while closing the http server:', err);
    }

    console.log('[info] gracefully terminated the service');
    process.exit(0);
  });

  await setTimeout(15000); // Give 15 seconds for graceful termination
  console.log("[error] couldn't shut down the service gracefully, forced to exit!");
  process.exit(1);
});

start();
