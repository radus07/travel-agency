var sequelize = require('../dbconnection/dbconnection');

var models = [
  'roles',
  'users'
]

models.forEach(function (model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);

  /**
   * Use this code for generate all models as tables in the database
   *  sequelize.import(__dirname + '/' + model).sync({ force: true });
   */

  /**
   * Use this code at command prompt for generate all tables as models in './' file
   *  sequelize-auto  -o "./" -d travel_agency -h localhost -u aliabibu -p 3306 -x aliabibu
   */

})