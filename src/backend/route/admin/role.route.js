var express = require('express');
var router = express.Router();
var roleService = require('../../service/role.service');

router.get('/', (req, res) => {
	roleService.getAllRoles((result) => {
		res.json(result);
	});
});

router.get('/:id', (req, res) => {
	roleService.getRoleById(req.params.id, (result) => {
		res.json(result);
	});
});

router.put('/save', (req, res) => {
	roleService.saveRole(req.body, (result) => {
		res.json(result);
	});
});

router.post('/update', (req, res) => {
	roleService.updateRole(req.body, (result) => {
		res.json(result);
	});
});

router.delete('/delete/:id', (req, res) => {
	roleService.deleteRole(req.params.id, (result) => {
		res.json(result);
	})
});

module.exports = router;