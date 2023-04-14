var http = require('http');
var url = require('url');
var fs = require('fs');

//append
fs.appendFile('FS_FILE1.txt','Hello World!',function(err){
    if(err) throw err;
    console.log("File appended!");
});

//create
fs.open('FS_FILE2.txt','w',function(err){
    if(err) throw err
    console.log("File created!");
});

//check if file exists. if not, create
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

//write
fs.writeFile("FS_FILE1.txt","You presence has been marked!",function(err){
    if(err) throw err;
    console.log("Written!");
});

//rename
try {
    fs.rename('FS_FILE1.txt', 'FS_FILER.txt', function(err) {
        if (err) throw err;
        console.log('Renamed!');
    });
} catch (err) {
    console.error('Error occurred:', err);
}

//delete
fs.unlink("FS_FILE2.txt",function(err){
    if(err) throw err;
    console.log("Deleted!");
});