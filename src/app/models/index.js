var sequelize = require('../backend/dbconnection/dbconnection');

var models = [
  'users', 'roles'
]

models.forEach(function (model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
})