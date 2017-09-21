var sequelize = require('../dbconnection/dbconnection');
var Role = sequelize.import('./roles');
var User = sequelize.import('./users');

User.belongsTo(Role);
Role.hasMany(User);

module.exports['roles'] = Role;
module.exports['users'] = User;

/**
 * Use this code at command prompt for generate all tables as models in './' file
 *  sequelize-auto  -o "./" -d travel_agency -h localhost -u aliabibu -p 3306 -x aliabibu
 */