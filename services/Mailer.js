const sendGrid = require('sendgrid');
const helper = sendGrid.mail;
const KEYS = require('./../config/keys');

module.exports = class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgAPI = sendGrid(KEYS.sendGridKey);
    this.from_email = new helper.Email('DoNotReply@FeedbackCollection.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.map((recipient) => {
      personalize.addTo(recipient);
    });

    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgAPI.emptyRequest({
      'method': 'POST',
      'path': '/v3/mail/send',
      'body': this.toJSON()
    });

    const response = await this.sgAPI.API(request);
    return response;
  }
};
