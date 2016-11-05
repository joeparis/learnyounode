var http = require('http');
var bl = require('bl');

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8')
    .pipe(bl( (error, data) => {
       console.log(data.length);
       console.log(data.toString());
    }))
    .on('error', (error) => {
       console.error(error);
    })
})
.on('error', (error) => {
  console.error(error);
});
