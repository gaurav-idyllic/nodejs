//
// Author: Gaurav Mamidwar
//
// Calculator App
//
// You can perform add, substract, multiply and divide using this app.
//
// For this, u need to pass query params containing action and values
//
// here are the example URL's
//
// http://localhost:3002/?action=add&a=112&b=10
// http://localhost:3002/?action=minus&a=112&b=10
// http://localhost:3002/?action=multiply&a=112&b=10
// http://localhost:3002/?action=divide&a=112&b=10

var http = require('http');
var url = require('url');
var calculator = require('./calculator');

requestHandler = function(req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  res.end('result = ' + calculator(query));
}

var server = http.createServer(requestHandler);

server.listen(3002, function(){
  console.log('started server on port 3002');
})
