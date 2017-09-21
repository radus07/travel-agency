var roleService = require('../service/role.service');

module.exports = (app, cors) => {
	app.get('/roles', cors(), (req, res) => {
		roleService.getAllRoles((result) => {
			res.json(result);
		});
	});
	
	app.get('/roles/:id', cors(), (req, res) => {
		roleService.getRoleById(req.params.id, (result) => {
			res.json(result);
		});
	});
	
	app.put('/roles/save', cors(), (req, res) => {
		roleService.saveRole(req.body, (result) => {
      res.json(result);
    });
	});

	app.post('/roles/update', cors(), (req, res) => {
		roleService.updateRole(req.body, (result) => {
			res.json(result);
		});
	});

	app.delete('/roles/delete/:id', cors(), (req, res) => {
		roleService.deleteRole(req.params.id, (result) => {
			res.json(result);
		})
	});
}