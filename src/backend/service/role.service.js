var sequelize = require('../dbconnection/dbconnection');
var models = require('../model/tables');
var Role = models.roles;
var Account = models.accounts;

var roleService = {
  getAllRoles: () => {
    return new Promise((resolve, reject) => {
      Role.findAll({
        include: [{ model: Account }],
      })
      .then(result => {
        return resolve(result);
      });
    })
  },
  getRoleById: (id) => {
    return new Promise((resolve, reject) => {
      Role.findById(id, {
        include: [{ model: Account }],
      })
      .then(result => {
        return resolve(result);
      })
    })
  },
  saveRole: (role) => {
    return new Promise((resolve, reject) => {
      Role.build(role).save()
      .then(result => {
        return resolve(result);
      })
      .catch(error => {
        return reject(error);
      });
    })
  },
  updateRole: (role) => {
    return new Promise((resolve, reject) => {
      Role.update(role, { where: { id: role.id } }
      )
      .then(result => {
        return resolve(result);
      });
    })
  },
  deleteRole: (id) => {
    return new Promise((resolve, reject) => {
      Role.destroy({ where: { id: id } })
      .then(result => {
        return resolve(result);
      });
    })
  }
}
module.exports = roleService;