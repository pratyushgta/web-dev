var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "**********"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE DATABASE webdev";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created!");
  });
});
