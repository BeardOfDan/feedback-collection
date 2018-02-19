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
    }, (accessToken, refreshToken, profile, done) => {
      console.log('access token:', accessToken, '\n\n');
      console.log('refresh token:', refreshToken, '\n\n');
      console.log('profile:', profile, '\n\n');
    }
  )
);

// Get Authentication Code from Google
app.get(
  '/auth/google',
  passport.authenticate('google', {
    'scope': ['profile', 'email']
  })
);

// Utilize Google's Authenication Code
app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
