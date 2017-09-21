var cors = require('cors');
module.exports = function (app) {
  require('./user.route')(app, cors);  
  require('./role.route')(app, cors);  
}