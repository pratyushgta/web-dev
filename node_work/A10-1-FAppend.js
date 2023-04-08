//creating a new file using appendFile() method of NODE JS File System Module:
var fs = require('fs'); 
fs.appendFile('A10-1-ExampleFile2.txt', 'Rush B, dont stop!', function (err) {
  if (err) throw err;
  console.log('Into the annals of digital lore, an addition hath been made, for the data hath been carefully affixed, a new chapter written in the grand tale of information!');
});
