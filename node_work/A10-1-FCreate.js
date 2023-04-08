//Create a new, empty file using the open() method of NODE JS File System Module:
var fs = require('fs');
fs.open('A10-1-ExampleFile1.txt', 'w', function (err, file) {
if (err)
throw err;
console.log("From the void of digital nothingness, a new entity hath arisen, crafted and brought forth into being, for a file hath been created!");
});