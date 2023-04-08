var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var p = url.parse(adr, true);
console.log(p.host);
console.log(p.pathname);
console.log(p.search);

var pdata = p.query;
console.log(pdata.month);