// Set our variables
var title = document.getElementById('title');
var description = document.getElementById('description');
var date = document.getElementById('date');
var submit = document.getElementById('to-do-button');
var toDoItems = document.getElementById('to-do-items');

// Initialize our values
let id = 0;
let allToDo = []

// Create to-do class
class ToDo {
  constructor(title, description, date, id){
    this.name = title;
    this.description = description;
    this.date = date;
    this.id = id;
  }
}

submit.addEventListener('click', function(event){
  event.preventDefault();
})

var todo1 = new ToDo('Wash Dishes', 'Need to clean counter and sink', '08-08-2022', 1)
console.log(todo1)

console.log(title.value)
