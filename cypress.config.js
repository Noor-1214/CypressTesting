// const {defineConfig} = require("Cypress");

module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  Video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true;
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
};
