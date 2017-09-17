var Sequelize = require('sequelize');

var sequelize = new Sequelize('travel_agency', 'aliabibu', 'aliabibu', {
	host: 'localhost',
	dialect: 'mysql',
});

sequelize
	.authenticate()
	.then(() => {
    /**
     * Connected Successfully
     */
  })
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

module.exports = sequelize;

/**
 * For generate models use: 
 *  sequelize-auto  -o "./models" -d travel_agency -h localhost -u aliabibu -p 3306 -x aliabibu
 */