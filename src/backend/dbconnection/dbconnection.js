const Sequelize = require('sequelize')

const sequelize = new Sequelize('travel_agency', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
    /**
     * Connected Successfully
     */
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = sequelize
