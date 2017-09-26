var sequelize = require('../dbconnection/dbconnection');
var models = require('../model/tables');
var Account = models.accounts;
var Role = models.roles;

var accountService = {
  getAllAccounts: (callback) => {
    Account.findAll({
      include: [{ model: Role }],
      attributes: { exclude: ['roleId'] }
    }).then(result => {
      return callback(result);
    });
  },
  getAccountById: (id, callback) => {
    Account.findById(id, {
      include: [{ model: Role }],
      attributes: { exclude: ['roleId'] }
    }).then(result => {
      return callback(result);
    })
  },
  getAccountByUsernameAndPassword: (username, password, callback) => {
    Account.findOne({ 
      where: { username: username, password: password },
      include: [{ model: Role }],
      attributes: { exclude: ['roleId'] }
    }).then(result => {
      return callback(result);
    });
  },
  saveAccount: (account, callback) => {
    Account.build(account).save().then(result => {
      return callback(result);
    }).catch(error => {
      return callback(error);
    });
  },
  updateAccount: (account, callback) => {
    Account.update(account, { where: { id: account.id } }
    ).then(result => {
      return callback(result);
    });
  },
  deleteAccount: (id, callback) => {
    Account.destroy({ where: { id: id } }).then(result => {
      return callback(result);
    });
  }
}
module.exports = accountService;