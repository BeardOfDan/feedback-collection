const passport = require('passport');

module.exports = (app) => {
  // Get Authentication Code from Google
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      'scope': ['profile', 'email']
    })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google'), // Utilize Google's Authenication Code
    (req, res, next) => { res.redirect('/surveys'); }
  );

  app.get('/api/logout', (req, res, next) => {
    req.logout();

    res.send(req.user);
  });

  app.get('/api/currentUser', (req, res, next) => {
    res.send(req.user);
  });
};


