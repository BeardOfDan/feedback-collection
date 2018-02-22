const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const KEYS = require('./../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      'clientID': KEYS.googleClientID,
      'clientSecret': KEYS.googleClientSecret,
      'callbackURL': '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
      User.findOne({ 'googleID': profile.id })
        .then((result) => {
          if (result === null) { // save the new user
            new User({ 'googleID': profile.id }).save();
          } else { // the user exists
            // do nothing, for now
          }
        });

    }
  )
);

