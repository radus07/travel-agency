var userService = require('../service/user.service');

module.exports = (app) => {
	app.get('/users', (req, res) => {
		userService.getAllUsers((result) => {
			res.json(result);
		});
	});
	
	app.get('/users/:id?', (req, res) => {
		userService.getUserById(req.params.id, (result) => {
			res.json(result);
		});
	});
	
	app.put('/users/save', (req, res) => {
		userService.saveUser(req.body, (result) => {
			res.json(result);
		});
	});

	app.post('/users/update', (req, res) => {
		userService.updateUser(req.body, (result) => {
			res.json(result);
		});
	});

	app.delete('/users/delete/:id', (req, res) => {
		userService.deleteUser(req.params.id, (result) => {
			res.json(result);
		})
	});
}