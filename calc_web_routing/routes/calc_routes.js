var express = require('express'),
    calculator = require('../calculator'),
    router = express.Router();

router.get('/', function(req, res, next) {
  console.log('root path');
  title = 'calculator web';
  res.render("index");
});

router.get('/perform_operation', function(req, res, next){
  input_params = req.query;
  output = calculator(input_params);
  res.send({ output: output});
});

module.exports = router;
