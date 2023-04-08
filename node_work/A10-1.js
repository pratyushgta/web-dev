var http = require("http");
var url = require("url");
var fs = require("fs");

//opens any file in the server > usage: localhost:8080/<A10-1.html>------------------------------------------------
http.createServer(function (req, res) {
  var file_url = url.parse(req.url, true);
  var filename = "." + file_url.pathname;
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 File Not Found");
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    }
  });
  
}).listen(8080);

//to demonstrate url module of nodejs------------------------------------------------
var url = require('url');
var adr = 'http://localhost:8080/A10-1.html?year=2077&month=november';
var p = url.parse(adr, true);
console.log(p.host);
console.log(p.pathname);
console.log(p.search);
var pdata = p.query;
console.log(pdata.month);

