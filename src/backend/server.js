var http = require('http');
var express = require('express');
var parser = require('body-parser');
var app = module.exports = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
});

require('./route/routes')(app);

http.createServer(app).listen(8083, () => {
	console.log("Server started")
});