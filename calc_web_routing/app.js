var express = require('express');
var path = require('path');
var app = express();
var morgan = require('morgan');
var calculator_routes = require('./routes/calc_routes')

app.set('views', path.resolve(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(morgan('combined'));
var pub_path = path.resolve(__dirname, 'public');
app.use(express.static(pub_path));

app.use('/calc', calculator_routes);

app.use(function(req, res){
  res.status(200).send('page not found.');
});

app.listen(3003);
