var express = require('express');
var path = require('path');
var app = express();
var morgan = require('morgan');

app.use(morgan('default'));

var pub_path = path.resolve(__dirname, 'public');
app.use(express.static(pub_path));

app.use(function(req, res, next){
  console.log('inside middlware:');
  if(req.ip == '::1') {
    res.status(200).send('IP BLOCKED ');
  } else {
    console.log('inside middlware: url :  '+ req.url);
    next();
  }
});

app.use(function(req, res){
  res.status(200).send('arerererer ');
});


app.get('/', function(req, res, next){
  console.log('root path');
  next();
});


app.listen(3002);
