var mustache = require('mustache');

result = mustache.render("Hello {{name}} {{}} ",
{
  name: 'Gaurav Mamidwar'
})


console.log(result);
