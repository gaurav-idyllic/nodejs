var http = require('http');

requestHandler = function(req, res) {
  console.log('inside requestHandler');
  console.log(process.argv[0]);
  if(req.url == '/'){
    var results = [1,2,2,2,2,2];
    res.end(results.join(','));
  } else {
    res.end('route not found.')
  }
}

var server = http.createServer(requestHandler);

server.listen(3002, function(){
  console.log('started server on port 3002');
})
