const { openingQueue, queryOpenedLobbies, openingWorker } = require('./atOpening');
const { aftermathQueue, queryClosedLobbies, aftermathWorker } = require('./aftermath');

let interval;

function start() {
  interval = setInterval(async () => {
    await Promise.all([queryClosedLobbies(), queryOpenedLobbies()]);
  }, 2000);
}

function stop() {
  clearInterval(interval);
  aftermathQueue.close();
  openingQueue.close();
  aftermathWorker.close();
  openingWorker.close();
}

module.exports = {
  start,
  stop,
};
