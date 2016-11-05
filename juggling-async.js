var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);
var results = [];
var outstanding = urls.length;

urls.forEach( (url, index) => {
  http.get(urls[index], (res) => {
    res.setEncoding('utf8')
      .pipe(bl( (error, data) => {
        results[index] = data.toString();
        --outstanding;

        if(outstanding === 0) {
          results.forEach( (result) => {
            console.log(result);
          });
        }
      }))
      .on('error', (error) => {
        console.error(error);
      });
  });
});
