const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const KEYS = require('./../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userID, done) => {
  User.findById(userID)
    .then((user) => {
      done(null, user);
    })
    .catch((e) => {
      console.log('\n\nError: in \'services/passport.js\'\n', e);
    });
});

passport.use(
  new GoogleStrategy(
    {
      'clientID': KEYS.googleClientID,
      'clientSecret': KEYS.googleClientSecret,
      'callbackURL': '/auth/google/callback',
      'proxy': true
    }, (accessToken, refreshToken, profile, done) => {
      User.findOne({ 'googleID': profile.id })
        .then((user) => {
          if (user === null) { // new user
            new User({ 'googleID': profile.id })
              .save()
              .then((newUser) => {
                done(null, newUser);
              })
              .catch((e) => {
                console.log('\n\nError: in \'services/passport.js\'\n', e);
              });
          } else { // existing user
            done(null, user);
          }
        })
        .catch((e) => {
          console.log('\n\nError: in \'services/passport.js\'\n', e);
        });
    }
  )
);

