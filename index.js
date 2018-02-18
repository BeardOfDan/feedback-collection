
const express = require('express');
const app = express();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const PORT = process.env.PORT || 3000;

passport.use(new GoogleStrategy());




app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
