var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  ppassword: "**********",
  database: "webdev"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM flight";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
