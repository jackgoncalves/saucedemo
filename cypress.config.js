const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // adicionado aqui
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
