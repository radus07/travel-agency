var sequelize = require('../dbconnection/dbconnection');
var models = require('../model/tables');
var User = models.users;
var Role = models.roles;

var userService = {
  getAllUsers: (callback) => {
    User.findAll({
      include: [{ model: Role }],
      attributes: { exclude: ['roleId'] }
    }).then(result => {
      return callback(result);
    });
  },
  getUserById: (id, callback) => {
    User.findById(id, {
      include: [{ model: Role }],
      attributes: { exclude: ['roleId'] }
    }).then(result => {
      return callback(result);
    })
  },
  getUserByUsernameAndPassword: (username, password, callback) => {
    User.findOne({ 
      where: { username: username, password: password },
      include: [{ model: Role }],
      attributes: { exclude: ['roleId'] }
    }).then(result => {
      return callback(result);
    });
  },
  saveUser: (user, callback) => {
    User.build(user).save().then(result => {
      return callback(result);
    }).catch(error => {
      return callback(error);
    });
  },
  updateUser: (user, callback) => {
    User.update(user, { where: { id: user.id } }
    ).then(result => {
      return callback(result);
    });
  },
  deleteUser: (id, callback) => {
    User.destroy({ where: { id: id } }).then(result => {
      return callback(result);
    });
  }
}
module.exports = userService;