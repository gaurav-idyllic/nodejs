function perform(action, obj) {
  var result = 0;
  var first_item = true;
  for( var el in obj ) {
    if(Object.prototype.hasOwnProperty.call(obj, el) ) {
      if(first_item == true) {
          result = parseFloat( obj[el] );
          first_item = false;
      } else {
        switch(action) {
        case 'add':
          result += parseFloat( obj[el] );
          break;
        case 'minus':
          result -= parseFloat( obj[el] );
          break;
        case 'multiply':
          result *= parseFloat( obj[el] );
          break;
        case 'divide':
          result /= parseFloat( obj[el] );
          break;
        default:
          result = 'unknown action';
        }
      }
    }
  }
  return result;
}

calculate = function(query) {
  action = query.action;
  delete query['action'];
  return perform(action, query);
}

module.exports = calculate;
