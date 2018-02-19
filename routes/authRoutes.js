const passport = require('passport');

module.exports = (app) => {
  // Get Authentication Code from Google
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      'scope': ['profile', 'email']
    })
  );

  // Utilize Google's Authenication Code
  app.get('/auth/google/callback', passport.authenticate('google'));
};


