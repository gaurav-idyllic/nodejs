var http = require('http');
var mustache = require('mustache');

requestHandler = function(req, res) {
  console.log('inside requestHandler');


  if(req.url == '/'){
    // res.end(
    //    mustache.render("Hello {{name}} {{}} ",
    //     {
    //       name: 'Gaurav Mamidwar'
    //     }
    //   )
    //  );


    result = mustache.render("Hello {{name}} {{}} ",
        {
          name: 'Gaurav Mamidwar'
        }
      )
    res.end(result);
  } else {
    res.end('route not found.')
  }
}

var server = http.createServer(requestHandler);

server.listen(3002, function(){
  console.log('started server on port 3002');
})


