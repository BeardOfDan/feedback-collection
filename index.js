
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send({ 'hi': 'there' });
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
