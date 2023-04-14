var http = require('http');
var url = require('url');
var fs = require('fs');

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