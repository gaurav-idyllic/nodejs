var http = require('http');
var random_number = require('./random_number');

requestHandler = function(req, res) {
  console.log('inside requestHandler');
  console.log(process.argv[0]);
  if(req.url == '/'){
    var results = [];
    for (var count =0; count < 3; count++) {
      results.push(random_number());
    }
    res.end(results.join(','));
  } else {
    res.end('route not found.')
  }
}

var server = http.createServer(requestHandler);

server.listen(3002, function(){
  console.log('started server on port 3002');
})
