module.exports = function (app) {
  require('./user.route')(app);  
  require('./role.route')(app);  
}