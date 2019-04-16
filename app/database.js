const Sequelize = require('sequelize');
const path = require('path');

const DatabaseSingleton = (function () {
  let instance;

  function init() {
    // IN PRODUCTION:
    // return new Sequelize('database', 'username', 'password', {
    //   host: 'localhost',
    //   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    // });

    // development database
    const dbPath = path.resolve(__dirname, '../var/local.sqlite');
    return new Sequelize({
      dialect: 'sqlite',
      storage: dbPath
    });
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

module.exports.Database = DatabaseSingleton;