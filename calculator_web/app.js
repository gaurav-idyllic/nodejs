var express = require('express');
var path = require('path');
var app = express();
var morgan = require('morgan');
var calculator = require('./calculator');

app.set('views', path.resolve(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(morgan('combined'));
var pub_path = path.resolve(__dirname, 'public');
app.use(express.static(pub_path));


app.get('/', function(req, res, next) {
  console.log('root path');
  title = 'calculator web';
  res.render("index");
});

app.get('/perform_operation', function(req, res, next){
  input_params = req.query;
  output = calculator(input_params);
  res.send({ output: output});
});

app.use(function(req, res){
  res.status(200).send('page not found.');
});



app.listen(3002);
