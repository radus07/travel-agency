var userService = require('../service/user.service');

module.exports = (app, cors) => {
	app.get('/users', cors(), (req, res) => {
		userService.getAllUsers((result) => {
			res.json(result);
		});
	});
	
	app.get('/users/:id', cors(), (req, res) => {
		userService.getUserById(req.params.id, (result) => {
			res.json(result);
		});
	});

	app.get('/users/:username/:password', cors(), (req, res) => {
		userService.getUserByUsernameAndPassword(req.params.username, req.params.password, (result) => {
			res.json(result);
		})
	});
	
	app.put('/users/save', cors(), (req, res) => {
		userService.saveUser(req.body, (result) => {
			res.json(result);
		});
	});

	app.post('/users/update', cors(), (req, res) => {
		userService.updateUser(req.body, (result) => {
			res.json(result);
		});
	});

	app.delete('/users/delete/:id', cors(), (req, res) => {
		userService.deleteUser(req.params.id, (result) => {
			res.json(result);
		})
	});
}