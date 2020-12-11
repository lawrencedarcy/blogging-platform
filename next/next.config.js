const withPWA = require('next-pwa');


module.exports = withPWA({
    pwa: {
        disable: true,
        register: false,
        dest: 'public'
    },
});

