const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { // Get Authentication Code from Google
      'scope': ['profile', 'email']
    })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google'), // Utilize Google's Authenication Code
    (req, res, next) => { res.redirect('/surveys'); }
  );

  app.get('/api/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/currentUser', (req, res, next) => {
    res.send(req.user);
  });
};
