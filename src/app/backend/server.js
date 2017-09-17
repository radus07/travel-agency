var http = require('http');
var express = require('express');
var parser = require('body-parser');
var app = express();
require('./route/routes')(app);

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

http.createServer(app).listen(8083, function() {
	console.log("Server started")
});