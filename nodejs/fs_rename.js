var fs = require('fs');

try {
    fs.rename('FS_FILE3.txt', 'FS_FILER.txt', function(err) {
        if (err) throw err;
        console.log('Renamed!');
    });
} catch (err) {
    console.error('Error occurred:', err);
}
