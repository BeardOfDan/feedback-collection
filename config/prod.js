
module.exports = {
  'googleClientID': process.env.GOOGLE_CLIENT_ID,
  'googleClientSecret': process.env.GOOGLE_CLIENT_SECRET,
  'mongoURI': `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
  'cookieKey': process.env.COOKIE_KEY,
  'stripePublishableKey': process.env.STRIPE_PUBLISHABLE_KEY,
  'stripeSecretKey': process.env.STRIPE_SECRET_KEY,
  'sendGridKey': process.env.sendGridKey
};
