var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'theteamweb'
    },
    port: process.env.PORT || 8282,
    db: 'mysql://root@localhost/theteamweb'
  },

  test: {
    root: rootPath,
    app: {
      name: 'theteamweb'
    },
    port: process.env.PORT || 8282,
    db: 'mysql://localhost/theteamweb-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'theteamweb'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/theteamweb-production'
  }
};

module.exports = config[env];
