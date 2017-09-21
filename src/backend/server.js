var http = require('http');
var express = require('express');
var parser = require('body-parser');
var app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

require('./route/routes')(app);

http.createServer(app).listen(8083, () => {
	console.log("Server started")
});