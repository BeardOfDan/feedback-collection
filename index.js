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

// User Models
require('./models/user');

// passport configuration
require('./services/passport');

// setup authentication routes
require('./routes/authRoutes')(app);

// setup Stripe routes
require('./routes/billingRoutes')(app);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} \n`);
});
