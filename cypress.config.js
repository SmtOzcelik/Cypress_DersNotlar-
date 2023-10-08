const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.google.com",
    projectId: "wdvpye",
    video:false, //videoları kayıt  etmemesi  için 
    
    //"retries":2
    //Test FAIL oldugunda onu kaç kez daha çalıştırması gerektiğini belirler 
    //"retries":2 -> 1 kere hata aldığında 2 kez daha deneyip toplam 3 kez çalıştıracak testi
  
  },
});
