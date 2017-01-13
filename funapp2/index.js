var http = require('http');

requestHandler = function(req, res) {
  console.log('inside requestHandler');
  if(req.url == '/'){
    res.end('welcome home !');
  } else {
    res.end('route not found.')
  }
}

var server = http.createServer(requestHandler);

server.listen(3002, function(){
  console.log('started server on port 3002');
})
