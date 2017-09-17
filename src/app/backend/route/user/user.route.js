var express = require('express');
var router = express.Router();
var userService = require('../../service/user.service');
var connection = require('../../dbconnection/dbconnection');

router.get('/', function (req, res) {
	userService.getAllUsers(function (result) {
		res.json(result);
	});
});

router.get('/:id?', function (req, res) {
	userService.getUserById(req.params.id, function (result) {
		res.json(result);
	});
});

module.exports = router;