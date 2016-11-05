var fls = require('./fls');

var dir = process.argv[2];
var ext = process.argv[3];

fls(dir, ext, (err, data) => {
  if(err) return error;

  data.forEach( (file) => { console.log(file); });
});
