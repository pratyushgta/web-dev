var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  ppassword: "**********",
  database: "webdev"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE flight (flight_no int(5),ac_reg varchar(20),origin varchar(20),destination varchar(20))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created!");
  });
});
