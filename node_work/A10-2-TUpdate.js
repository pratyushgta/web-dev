var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  ppassword: "**********",
  database: "webdev"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE flight SET ac_reg = 'VT-A9X' WHERE flight_no = 201";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
