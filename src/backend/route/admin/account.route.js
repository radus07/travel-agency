var express = require('express');
var router = express.Router();
var accountService = require('../../service/account.service');

router.get('/', (req, res) => {
	accountService.getAllAccounts()
		.then((result) => {
			res.json(result);
		});
});

router.get('/:id', (req, res) => {
	accountService.getAccountById(req.params.id)
		.then((result) => {
			res.json(result);
		})
		.catch(err => {
			res.json(404);
		});
});

router.get('/:username/:password', (req, res) => {
	accountService.getAccountByUsernameAndPassword(req.params.username, req.params.password)
		.then((result) => {
			res.json(result);
		})
});

router.put('/save', (req, res) => {
	accountService.saveAccount(req.body)
		.then((result) => {
			res.json(result);
		});
});

router.post('/update', (req, res) => {
	accountService.updateAccount(req.body)
		.then((result) => {
			res.json(result);
		});
});

router.delete('/delete/:id', (req, res) => {
	accountService.deleteAccount(req.params.id)
		.then((result) => {
			res.json(result);
		})
});

module.exports = router;