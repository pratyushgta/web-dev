var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "<yourpassword>",
  database: "webdev2",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  //create table
  var query1 = "CREATE TABLE TESTER(name varchar(20),age int(5))";
  con.query(query1, function (err) {
    if (err) throw err;
    console.log("Table Created!");
  });

  //insert value 1
  var query2 = "INSERT INTO TESTER VALUES('Someone',10)";
  con.query(query2, function (err) {
    if (err) throw err;
    console.log("Value Inserted!");
  });

  //insert value 2
  var query3 = "INSERT INTO TESTER VALUES('Anyone',20)";
  con.query(query3, function (err) {
    if (err) throw err;
    console.log("Value Inserted!");
  });

  //show records
  var query4 = "select * from tester";
  con.query(query4, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  //update
  var query7 = "update tester set age = 50 where name='Someone'";
  con.query(query7, function (err) {
    if (err) throw err;
    console.log("Updated!");
  });

  //where
  var query5 = "select * from tester where age=20";
  con.query(query5, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  //order by
  var query6 = "select * from tester order by age desc";
  con.query(query6, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  //delete
  var query8 = "delete from tester where age = 50";
  con.query(query8, function (err) {
    if (err) throw err;
    console.log("Record deleted!");
  });

  //show records
  var query4 = "select * from tester";
  con.query(query4, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  //drop table
  var query9 = "drop table tester";
  con.query(query9, function (err) {
    if (err) throw err;
    console.log("Table deleted!");
  });
});
