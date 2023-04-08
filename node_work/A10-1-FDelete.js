// Deleting an existing file using NODE JS File System Module:
var fs = require('fs');

fs.unlink("A10-1-Renamed.txt", function (err) {
    if (err) throw err;
    console.log("Alas, the file hath been vanquished and consigned to the digital void, deleted from existence!");
});