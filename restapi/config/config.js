const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb+srv://ani:123-ani@cluster0.wtg9m.mongodb.net/zooLand?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];