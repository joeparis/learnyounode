var fs   = require('fs');
var path = require('path');

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (error, files) => {
    if(error)
      return callback(error);

    files = files.filter( (value) => {
      return path.extname(value) === "." + ext;
    });

      callback(null, files);
  });
};
