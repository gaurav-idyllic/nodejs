calculate = function(params){
  output = 0;
  action = params.action;
  param1 = parseFloat(params.param1);
  param2 = parseFloat(params.param2);
  switch(action) {
  case 'add':
    output = param1 + param2;
    break;
  case 'substract':
    output = param1 - param2;
    break;
  case 'multiply':
    output = param1 * param2;
    break;
  case 'divide':
    output = param1 / param2;
    break;
  default:
    output = 'unknown action';
  };
  return output;
}

module.exports = calculate;
