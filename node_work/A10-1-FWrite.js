//Write in a file using the writeFile() method of NODE JS File System Module:
var fs = require('fs');

fs.writeFile("A10-1-ExampleFile1.txt", "Spartan, lock and load!", function (err) {
    if (err)
        throw err;
    console.log("Lo and behold, the digital scrolls have been inscribed with new knowledge, for the data hath been meticulously etched into the vast tapestry of information!");
});