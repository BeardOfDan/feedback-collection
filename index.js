
const express = require('express');
const app = express();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const KEYS = require('./config/keys');

const PORT = process.env.PORT || 3000;

passport.use(
  new GoogleStrategy(
    {
      'clientID': KEYS.googleClientID,
      'clientSecret': KEYS.googleClientSecret,
      'callbackURL': '/auth/google/callback'
    }, (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    'scope': ['profile', 'email']
  })
);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
