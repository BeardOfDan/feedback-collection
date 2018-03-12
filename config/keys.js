
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else { // development
  require('dotenv').config(); // set up local environment variables

  module.exports = require('./dev');
}
