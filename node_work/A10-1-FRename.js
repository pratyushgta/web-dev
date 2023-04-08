//Renaming existing file using NODE JS File System Module:
var fs = require('fs');
fs.rename("A10-1-ExampleFile1.txt", "A10-1-Renamed.txt", function (err) {
    if (err) throw err;
    console.log("Behold, the file hath shed its former mantle and donned a new guise, transformed and reborn through the art of renaming!");
})