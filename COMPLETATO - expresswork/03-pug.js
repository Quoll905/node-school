const port = process.argv[2];
const file = process.argv[3];

const path = require('path');

const express = require('express');

const app = express();

app.get('/home', function(req, res) {
  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname, 'templates'));
  res.render(file, {date: new Date().toDateString()})
})
app.listen(port);
