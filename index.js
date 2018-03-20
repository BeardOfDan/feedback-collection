const express = require('express');
const app = express();

const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const KEYS = require('./config/keys');

app.use(bodyParser.json());

app.use(
  cookieSession({
    'maxAge': 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    'keys': [KEYS.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(KEYS.mongoURI);

// Mongoose Models
require('./models/User');
require('./models/Survey');

// passport configuration
require('./services/passport');

// Routes
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Ensures that express knows to use the 'build' of the client side code
  app.use(express.static('client/build'));

  // Ensures that React Router handles any unhandled paths
  const path = require('path');
  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} \n`);
});
