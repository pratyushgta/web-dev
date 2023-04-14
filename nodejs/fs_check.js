const { error } = require('console');
var fs = require('fs');

var filename = "FS_FILE3.txt";

fs.access(filename,fs.constants.F_OK,function(err){
    if(err){
        fs.open(filename,'w',function(err){
            if(err) throw error;
            console.log("File created!");
        });
    } else{
        console.log('File already exists!');
    }
});