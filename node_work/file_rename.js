var fs = require('fs');

fs.rename("mynewfile3.txt", "mynewfile2.txt", function (err) {
    if (err) throw err;
    console.log("File renamed!");
})