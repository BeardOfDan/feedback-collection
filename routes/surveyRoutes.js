const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

const requireLogin = require('./../middlewares/requireLogin');
const requireCredits = require('./../middlewares/requireCredits');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res, next) => {
    const { title, subject, body, recipients } = req.body;

    // translates a csv string into an array of objects
    const recipientsArray = recipients.split(',').map((email) => {
      return { 'email': email.trim() };
    });

    const survey = new Survey({
      title,
      body,
      subject,
      'recipients': recipientsArray,
      'dateSent': Date.now(),
      '_user': req.user.id
    });
  });
};
