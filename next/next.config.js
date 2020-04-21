const withPWA = require('next-pwa');


module.exports = withPWA({
    pwa: {
        dest: 'public'
    },

    env: {
   
        CUSTOM_KEY: 'testing'
      } 


});

