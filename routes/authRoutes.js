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

  app.get('/api/logout', (req, res, next) => {
    req.logout();

    res.send(req.user);
  });

  app.get('/api/currentUser', (req, res, next) => {
    res.send(req.user);
  });
};


