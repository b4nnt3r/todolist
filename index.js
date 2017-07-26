const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')

var app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function(request, response) {
  response.render('thingsToDo');
});
// 
// app.post('/', function(request, response) {
//   var schema = {
//     'name': {
//       notEmpty: true,
//       isLength: {
//         options: [{
//           max: 100
//         }],
//         errorMessage: 'Name must not be longer than 100 characters'
//       },
//       errorMessage: 'Invalid Name'
//     }
//   request.assert(schema);
//   request.getValidationResult().then(function(results) {
//     if (results.isEmpty()) {
//       response.render('thingsToDo', {
//         answers: request.body
//       });
//     } else {
//       response.render('thingsToDo', {
//         errors: results.array()
//       });
//     }
//   });
// });



app.listen(3000, function() {
  console.log('To Do list on...');
});
