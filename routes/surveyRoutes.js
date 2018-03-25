const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

const requireLogin = require('./../middlewares/requireLogin');
const requireCredits = require('./../middlewares/requireCredits');

const Mailer = require('./../services/Mailer');
const surveyTemplate = require('./../services/emailTemplates/surveyTemplate');

module.exports = (app) => {
  app.get('/api/surveys/thanks', (req, res, next) => {
    res.send('Thank you for your feedback!');
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res, next) => {
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

    try {
      // Tell Send Grid to send the emails
      const mailer = new Mailer(survey, surveyTemplate(survey));
      await mailer.send();

      // Save the survey to the DB
      await survey.save();

      // Deduct a credit for payment
      req.user.credits -= 1;

      // Save the new credit balance
      const user = await req.user.save();

      res.send(user);
    } catch (e) {
      res.status(422).send(e);
    }
  }); // end of POST '/api/surveys'
};
