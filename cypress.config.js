const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: 'https://mailfence.com/'

  },
  retries:{
    runMode: 1

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js"
  },
});
