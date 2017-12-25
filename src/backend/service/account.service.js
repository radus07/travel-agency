const models = require('../model/tables')

const Account = models.accounts
const Role = models.roles

const accountService = {
  getAllAccounts: () => new Promise((resolve) => {
    Account.findAll({
      include: [{ model: Role }],
      attributes: { exclude: ['roleId'] }
    })
      .then((result) => {
        resolve(result)
      })
  }),
  getAccountById: id => new Promise((resolve, reject) => {
    Account.findById(id, {
      include: [{ model: Role }],
      attributes: { exclude: ['roleId'] }
    })
      .then((result) => {
        if (result) {
          resolve(result)
        } else {
          reject(result)
        }
      })
  }),
  getAccountByUsernameAndPassword: (username, password) => new Promise((resolve, reject) => {
    Account.findOne({
      where: { username, password },
      include: [{ model: Role }],
      attributes: { exclude: ['roleId'] }
    })
      .then((result) => {
        if (result) {
          resolve(result)
        } else {
          reject(result)
        }
      })
  }),
  saveAccount: account => new Promise((resolve, reject) => {
    Account.build(account).save()
      .then((result) => {
        resolve(result)
      }).catch((error) => {
        reject(error)
      })
  }),
  updateAccount: account => new Promise((resolve) => {
    Account.update(account, { where: { id: account.id } })
      .then((result) => {
        resolve(result)
      })
  }),
  deleteAccount: id => new Promise((resolve) => {
    Account.destroy({ where: { id } })
      .then((result) => {
        resolve(result)
      })
  })
}
module.exports = accountService
