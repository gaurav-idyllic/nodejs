var express = require('express');
var path = require('path');
var mustache = require('mustache');
var app = express();

app.get('/user/:name', function(req, res){
  html = mustache.render("Hello {{name}}", {
    name: req.params.name
  });
  res.status(200).send(html);
});

app.use(function(req, res, next){
  console.log('inside middlware: url :  '+ req.url);
  next();
});

app.use(function(req, res){
  res.status(200).send('arerererer ');
});


app.listen(3002);
