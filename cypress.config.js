const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // adicionado aqui
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
