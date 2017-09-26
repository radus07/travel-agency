var express = require('express');
var router = express.Router();
var accountService = require('../../service/account.service');

router.get('/', (req, res) => {
	accountService.getAllAccounts((result) => {
		res.json(result);
	});
});

router.get('/:id', (req, res) => {
	accountService.getAccountById(req.params.id, (result) => {
		res.json(result);
	});
});

router.get('/:username/:password', (req, res) => {
	accountService.getAccountByUsernameAndPassword(req.params.username, req.params.password, (result) => {
		res.json(result);
	})
});

router.put('/save', (req, res) => {
	accountService.saveAccount(req.body, (result) => {
		res.json(result);
	});
});

router.post('/update', (req, res) => {
	accountService.updateAccount(req.body, (result) => {
		res.json(result);
	});
});

router.delete('/delete/:id', (req, res) => {
	accountService.deleteAccount(req.params.id, (result) => {
		res.json(result);
	})
});

module.exports = router;