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


//NODE JS FILE SYSTEM MODULE------------------------------------------------
//creating a new file using appendFile() method of NODE JS File System Module:
var fs = require('fs'); 
fs.appendFile('A10-1-ExampleFile2.txt', 'Rush B, dont stop!', function (err) {
  if (err) throw err;
  console.log('Into the annals of digital lore, an addition hath been made, for the data hath been carefully affixed, a new chapter written in the grand tale of information!');
});

//Create a new, empty file using the open() method of NODE JS File System Module:
var fs = require('fs');
fs.open('A10-1-ExampleFile1.txt', 'w', function (err, file) {
if (err)
throw err;
console.log("From the void of digital nothingness, a new entity hath arisen, crafted and brought forth into being, for a file hath been created!");
});

//Create a new file using the writeFile() method of NODE JS File System Module:
var fs = require('fs');

fs.writeFile("A10-1-ExampleFile1.txt", "Spartan, lock and load!", function (err) {
    if (err)
        throw err;
    console.log("Lo and behold, the digital scrolls have been inscribed with new knowledge, for the data hath been meticulously etched into the vast tapestry of information!");
});

//Renaming existing file using NODE JS File System Module:
var fs = require('fs');
fs.rename("A10-1-ExampleFile1.txt", "A10-1-Renamed.txt", function (err) {
    if (err) throw err;
    console.log("Behold, the file hath shed its former mantle and donned a new guise, transformed and reborn through the art of renaming!");
})// Deleting an existing file using NODE JS File System Module:
var fs = require('fs');

fs.unlink("A10-1-Renamed.txt", function (err) {
    if (err) throw err;
    console.log("Alas, the file hath been vanquished and consigned to the digital void, deleted from existence!");
});

