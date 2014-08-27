var nconf = require('nconf');

function Config() {
  // identify which environment we want to run (or set to development by default)
  var environment = nconf.get('NODE_ENV') || 'development';

  // Setup nconf to use (in-order):
  //   1. Command-line arguments
  //   2. Environment variables
  //   3. An environment config file located at 'config/development.json'
  //   4. A defaults config file located at 'config/default.json'
  //
  nconf.argv()
       .env()
       .file({ file: 'path/to/config.json' })
       .file(environment, 'config/' + environment + '.json')
       .file('default', 'config/default.json');
};

Config.prototype.get = function(key) {
  return nconf.get(key);
};

module.exports = new Config();