
module.exports = {
  'googleClientID': 'Google Client ID Goes Here',
  'googleClientSecret': 'Google Client Secret Goes Here',
  'mongoURI': `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
  'cookieKey': 'Cookie Key Goes Here'
};
