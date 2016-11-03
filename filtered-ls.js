var fs   = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, (error, files) => {
    if(error)
        throw error;

    files = files.filter( (value) => {
        return path.extname(value) === ext;
    });

    files.forEach( (file) => {
        console.log(file);
    });
});
