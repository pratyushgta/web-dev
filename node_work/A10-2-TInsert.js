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
  var sql = "INSERT INTO flight VALUES (201,'VT-55X','Mumbai','Delhi')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
