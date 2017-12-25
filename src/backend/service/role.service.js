const models = require('../model/tables')

const Role = models.roles
const Account = models.accounts

const roleService = {
  getAllRoles: () => new Promise((resolve) => {
    Role.findAll({
      include: [{ model: Account }]
    })
      .then(result => resolve(result))
  }),
  getRoleById: id => new Promise((resolve) => {
    Role.findById(id, {
      include: [{ model: Account }]
    })
      .then(result => resolve(result))
  }),
  saveRole: role => new Promise((resolve, reject) => {
    Role.build(role).save()
      .then(result => resolve(result))
      .catch(error => reject(error))
  }),
  updateRole: role => new Promise((resolve) => {
    Role.update(role, { where: { id: role.id } })
      .then(result => resolve(result))
  }),
  deleteRole: id => new Promise((resolve) => {
    Role.destroy({ where: { id } })
      .then(result => resolve(result))
  })
}
module.exports = roleService
