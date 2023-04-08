var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  ppassword: "**********",
  database: "webdev"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM flight", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
