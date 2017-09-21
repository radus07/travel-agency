var sequelize = require('../dbconnection/dbconnection');
var models = require('../model/tables');
var Role = models.roles;
var User = models.users;

var roleService = {
  getAllRoles: (callback) => {
    Role.findAll({
      include: [{ model: User }],
    }).then(result => {
      return callback(result);
    });
  },
  getRoleById: (id, callback) => {
    Role.findById(id, {
      include: [{ model: User }],
    }).then(result => {
      return callback(result);
    })
  },
  saveRole: (role, callback) => {
    Role.build(role).save().then(result => {
      return callback(result);
    }).catch(error => {
      return callback(error);
    });
  },
  updateRole: (role, callback) => {
    Role.update(role, { where: { id: role.id } }
    ).then(result => {
      return callback(result);
    });
  },
  deleteRole: (id, callback) => {
    Role.destroy({ where: { id: id } }).then(result => {
      return callback(result);
    });
  }
}
module.exports = roleService;