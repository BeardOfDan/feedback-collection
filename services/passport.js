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
    }, async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ 'googleID': profile.id });
      if (user === null) { // new user
        const newUser = await new User({ 'googleID': profile.id });
        await newUser.save();
        done(null, newUser);
      } else { // existing user
        done(null, user);
      }
    }
  )
);

