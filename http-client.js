var http = require('http');

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8')
     .on('data', (data) => {
       console.log(data); })
     .on('error', (error) => {
       console.error(error); })

  res.resume();
}).on('error', (error) => {
  console.error(error);
});
