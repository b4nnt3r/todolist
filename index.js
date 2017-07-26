const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')
const toDos = [];
const complete = [];

var app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get("/", function(req, res) {
  res.render('thingsToDo', {
    toDos: toDos, complete: complete
  });
});

app.post("/", function(req, res) {
  toDos.push(req.body.toDo);
  res.redirect('/');
})

app.get("/", function(req, res) {
  complete.push(toDos);
  res.redirect('/');
})

app.listen(3000, function() {
  console.log('To Do list on...');
});
