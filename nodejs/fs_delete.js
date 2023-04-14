var fs = require('fs');

fs.unlink("FS_FILER.txt",function(err){
    if(err) throw err;
    console.log("Deleted!");
})