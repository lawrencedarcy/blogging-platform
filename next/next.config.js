const withPWA = require('next-pwa');


module.exports = withPWA({
    pwa: {
        disable: false,
        register: false,
        dest: 'public'
    },
});

