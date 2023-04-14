var http = require('http');
var url = require('url');
var fs = require('fs');

var adr = 'http://locahost:8080/module.html?year=2077&month=december';
var file_url = url.parse(adr,true);
console.log("Host: "+file_url.host);
console.log("Pathname: "+file_url.pathname);
console.log("Search: "+file_url.search);
var pdata = file_url.query;
console.log("Month: "+pdata.month);
console.log("Year: "+pdata.year);
