var connection = require('../dbconnection/dbconnection');
var userService = {

  getAllUsers: function (callback) {
    var query = "SELECT * FROM users";
    return connection.query(query, function (err, rows) {
      return callback(getResponseFromQueryResult(err, rows));
    });
  },
  getUserById: function (id, callback) {
    var query = "SELECT * FROM users WHERE ID = ?";
    return connection.query(query, [id], function (err, rows) {
      return callback(getResponseFromQueryResult(err, rows));
    });
  }

}

var response = {
  status: "",
  data: ""
}

function getResponseFromQueryResult(err, rows) {
  if (err) {
    response = {
      status: 404,
      data: [] 
    };
  } else {
    response = {
      status: 200,
      data: rows
    };
  }
  return response;
}
module.exports = userService;