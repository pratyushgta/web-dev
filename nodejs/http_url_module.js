var http = require('http');
var url = require('url');
var fs = require('fs');

//http module
http.createServer(function(req,res){
    var file_url = url.parse(req.url,true);
    var filename = "."+file_url.pathname; //http://example.com/foo/bar.html, the filename variable would be set to ./foo/bar.html.
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end("404 File not found!!");  
        } else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);


//url module
var adr = 'http://locahost:8080/module.html?year=2077&month=december';
var file_url = url.parse(adr,true);
console.log("Host: "+file_url.host);
console.log("Pathname: "+file_url.pathname);
console.log("Search: "+file_url.search);
var pdata = file_url.query;
console.log("Month: "+pdata.month);
console.log("Year: "+pdata.year);


//EXTRA 1 
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(req.url);
    res.end('Hello world!');
}).listen(8080);


//EXTRA 2 USING EXPRESS
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req,res){
    res.send("Hello world!");
});

app.listen(port, function(){
    console.log(`Hello world! Listening on port ${port}!`);
})