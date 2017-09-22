var express = require('express');
var router = express.Router();
var userService = require('../service/user.service');

router.get('/', (req, res) => {
	userService.getAllUsers((result) => {
		res.json(result);
	});
});

router.get('/:id', (req, res) => {
	userService.getUserById(req.params.id, (result) => {
		res.json(result);
	});
});

router.get('/:username/:password', (req, res) => {
	userService.getUserByUsernameAndPassword(req.params.username, req.params.password, (result) => {
		res.json(result);
	})
});

router.put('/save', (req, res) => {
	userService.saveUser(req.body, (result) => {
		res.json(result);
	});
});

router.post('/update', (req, res) => {
	userService.updateUser(req.body, (result) => {
		res.json(result);
	});
});

router.delete('/delete/:id', (req, res) => {
	userService.deleteUser(req.params.id, (result) => {
		res.json(result);
	})
});

module.exports = router;