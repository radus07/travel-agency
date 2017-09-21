var roleService = require('../service/role.service');

module.exports = (app) => {
	app.get('/roles', (req, res) => {
		roleService.getAllRoles((result) => {
			res.json(result);
		});
	});
	
	app.get('/roles/:id', (req, res) => {
		roleService.getRoleById(req.params.id, (result) => {
			res.json(result);
		});
	});
	
	app.put('/roles/save', (req, res) => {
		roleService.saveRole(req.body, (result) => {
      res.json(result);
    });
	});

	app.post('/roles/update', (req, res) => {
		roleService.updateRole(req.body, (result) => {
			res.json(result);
		});
	});

	app.delete('/roles/delete/:id', (req, res) => {
		roleService.deleteRole(req.params.id, (result) => {
			res.json(result);
		})
	});
}