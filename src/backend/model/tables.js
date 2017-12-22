const sequelize = require('../dbconnection/dbconnection');

const Role = sequelize.import('./roles');
const Account = sequelize.import('./accounts');

Account.belongsTo(Role);
Role.hasMany(Account);

// Role.sync({ force: true });
// Account.sync({ force: true });

module.exports.roles = Role;
module.exports.accounts = Account;


/**
 * Use this code for generate the model as table in the database
 *  modelName.sync({ force: true });
 *
 * Use this code at command prompt for generate all tables as models in './' file
 *  sequelize-auto  -o "./" -d travel_agency -h localhost -u aliabibu -p 3306 -x aliabibu
 */
