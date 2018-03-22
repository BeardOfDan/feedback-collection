# Feedback Collection

This application allows a user to pay for surveys to be sent out via mass emails


***


## Production Mode

The following environment variables need to be set:

  * COOKIE_KEY
  * DB_HOST
  * DB_PASS
  * DB_USER
  * GOOGLE_CLIENT_ID
  * GOOGLE_CLIENT_SECRET
  * STRIPE_SECRET_KEY
  * STRIPE_PUBLISHABLE_KEY
  * REACT_APP_STRIPE_PUBLISHABLE_KEY

_Note: **'REACT_APP_STRIPE_PUBLISHABLE_KEY'** is the same as **'STRIPE_PUBLISHABLE_KEY'**_. _The duplication is for the sake of development mode_.

***


## Development Mode:

You must create the files '.env' and 'config/dev.js' to run the program in development mode. Each has an example file included.

