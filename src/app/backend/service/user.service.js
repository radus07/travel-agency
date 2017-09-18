var sequelize = require('../dbconnection/dbconnection');
// var User = sequelize.import('../../models/users.js');
var models = require('../../models');
var User = models.users;

var userService = {
  getAllUsers: function (callback) {
    User.findAll().then(result => {
      return callback(result);
    });
  },
  getUserById: function (id, callback) {
    User.findAll({
      where: {
        ID: id
      }
    }).then(result => {
      return callback(result);
    })
  }
}
module.exports = userService;
