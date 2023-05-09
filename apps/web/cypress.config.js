const { defineConfig } = require('cypress');
const { loadEnvConfig } = require('@next/env');

const { combinedEnv } = loadEnvConfig(process.cwd());
module.exports = defineConfig({
  env: combinedEnv,
  e2e: {
    baseUrl: 'http://localhost:3000',
    retries: {
      runMode: 3,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    screenshotOnRunFailure: false,
    experimentalSessionAndOrigin: true,
  },
});
