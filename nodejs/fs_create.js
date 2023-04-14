var fs = require('fs');

fs.open('FS_FILE2.txt','w',function(err){
    if(err) throw err
    console.log("File created!");
});

