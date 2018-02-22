
module.exports = {
  'googleClientID': process.env.GOOGLE_CLIENT_ID,
  'googleClientSecret': process.env.GOOGLE_CLIENT_SECRET,
  'mongoURI': `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
  'cookieKey': process.env.COOKIE_KEY
};
