//creating a new file using appendFile()
var fs = require('fs'); 
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
