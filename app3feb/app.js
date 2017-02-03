var express = require('express');
var path = require('path');
var app = express();

var pub_path = path.resolve(__dirname, 'public');
app.use(express.static(pub_path));

app.use(function(req, res, next){
  console.log('inside middlware: url :  '+ req.url);
  next();
});

app.use(function(req, res){
  res.status(200).send('arerererer ');
});


app.listen(3002);
