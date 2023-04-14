var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:'root',
    password: "<yourpassword>",
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var query = "CREATE DATABASE webdev2";
    con.query(query,function(err){
        if(err) throw err;
        console.log("Database created!");
    });
});