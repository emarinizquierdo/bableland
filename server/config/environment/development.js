'use strict';

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: 'mongodb://localhost/bableland-dev'
    },

    seedDB: false,

    google: {
        clientID: '536470903952-uit2nvn0qk34ijn26dalnb307jm3i0ii.apps.googleusercontent.com',
        clientSecret: 'RbP_AT9lQwckLyUGpF9gL6UF',
        callbackURL: (process.env.DOMAIN || '') + '/auth/google/callback'
    }
};
