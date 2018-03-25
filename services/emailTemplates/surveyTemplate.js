const KEYS = require('./../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I would like your input!</h3>
          <p>Please respond to the following query</p>
          <p>${survey.body}</p>
          <div>
            <a href="${KEYS.redirectDomain}/api/surveys/thanks">Yes</a>
          </div>
          <div>
            <a href="${KEYS.redirectDomain}/api/surveys/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
