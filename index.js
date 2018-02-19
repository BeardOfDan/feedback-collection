const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// passport configuration
require('./services/passport');

// setup authentication routes
require('./routes/authRoutes')(app);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} \n`);
});
