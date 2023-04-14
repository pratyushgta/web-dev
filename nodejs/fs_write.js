var fs = require('fs');

fs.writeFile("FS_FILE1.txt","You presence has been marked!",function(err){
    if(err) throw err;
    console.log("Written!");
});