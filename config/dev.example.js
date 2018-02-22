
// This file is a template for 'dev.js', which is listed in .gitignore because it has information that should not be comitted to a public repository.

module.exports = {
  'googleClientID': 'Google Client ID Goes Here',
  'googleClientSecret': 'Google Client Secret Goes Here',
  'mongoURI': `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
  'cookieKey': 'Cookie Key Goes Here'
};
