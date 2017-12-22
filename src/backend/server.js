const http = require('http');
const express = require('express');
const parser = require('body-parser');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

require('./route/routes')(app);

http.createServer(app).listen(8083, () => {
  console.log('Server started');
});
