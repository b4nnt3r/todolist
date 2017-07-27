const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')
let listToDos = [];
// let complete = [];

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get("/", function(req, res) {
  res.render('thingsToDo', {
    toDos: listToDos,
  });
});

app.post("/", function(req, res) {
  let id = parseInt(Math.random() * 1000)
  newTodoObject = {
    text: req.body.newTodo,
    id: id
  }
  listToDos.push(newTodoObject);
  res.redirect('/');
});

app.post('/mark-complete/:id', function(req, res) {
  let toDoId = parseInt(req.params.id);
  let completeTodo = listToDos.find(function (todo) {
    return todo.id === toDoId
  });
  completeTodo.complete = true;
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('To Do list on...');
});
