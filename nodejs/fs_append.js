var http = require('http');
var url = require('url');
var fs = require('fs');

fs.appendFile('FS_FILE1.txt','Hello World!',function(err){
    if(err) throw err;
    console.log("File appended!");
});