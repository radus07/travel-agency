var sequelize = require('../dbconnection/dbconnection');
var models = require('../model/tables');
var Account = models.accounts;
var Role = models.roles;

var accountService = {
  getAllAccounts: () => {
    return new Promise((resolve, reject) => {
      Account.findAll({
        include: [{ model: Role }],
        attributes: { exclude: ['roleId'] }
      })
      .then(result => {
        resolve(result);
      });
    });
  },
  getAccountById: (id) => {
    return new Promise((resolve, reject) => {
      Account.findById(id, {
        include: [{ model: Role }],
        attributes: { exclude: ['roleId'] }
      })
      .then(result => {
        if (result) {
          resolve(result);
        } else {
          reject(result);
        }
      });
    });
  },
  getAccountByUsernameAndPassword: (username, password) => {
    return new Promise((resolve, reject) => {
      Account.findOne({
        where: { username: username, password: password },
        include: [{ model: Role }],
        attributes: { exclude: ['roleId'] }
      })
      .then(result => {
        if (result) {
          resolve(result);
        } else {
          reject(result);
        }
      });
    })
  },
  saveAccount: (account) => {
    return new Promise((resolve, reject) => {
      Account.build(account).save()
      .then(result => {
        resolve(result);
      }).catch(error => {
        reject(result);
      });
    });
  },
  updateAccount: (account) => {
    return new Promise((resolve, reject) => {
      Account.update(account, { where: { id: account.id } })
      .then(result => {
        resolve(result);
      });
    });
  },
  deleteAccount: (id) => {
    return new Promise((resolve, reject) => {
      Account.destroy({ where: { id: id } })
      .then(result => {
        resolve(result);
      });
    });
  }
}
module.exports = accountService;