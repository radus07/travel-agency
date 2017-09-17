var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "aliabibu",
  password: "aliabibu",
  database: "travel_agency"
});

conn.connect(function (err) {
  if (err) throw err;
});

module.exports = conn;