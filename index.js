const express = require('express');
const app = express();

// set up local environment variables
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const KEYS = require('./config/keys');

const mongoose = require('mongoose');

mongoose.connect(KEYS.mongoURI);

// passport configuration
require('./services/passport');

// setup authentication routes
require('./routes/authRoutes')(app);

// User Models
require('./models/user');

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} \n`);
});
