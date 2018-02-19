const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const KEYS = require('./../config/keys');

passport.use(
  new GoogleStrategy(
    {
      'clientID': KEYS.googleClientID,
      'clientSecret': KEYS.googleClientSecret,
      'callbackURL': '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
      console.log('access token:', accessToken, '\n\n');
      console.log('refresh token:', refreshToken, '\n\n');
      console.log('profile:', profile, '\n\n');
    }
  )
);

