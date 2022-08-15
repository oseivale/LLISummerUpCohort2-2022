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
    this.title = title;
    this.description = description;
    this.date = date;
    this.id = id;
  }
}

submit.addEventListener('click', function(event){
  event.preventDefault();

  var todo = new ToDo(title.value, description.value, date.value, 1)
  console.log('New To-do', todo)

  // Ceating elements
  var newToDoDiv = document.createElement('div')
  var todoTitleElement = document.createElement('h3')
  var todoDescElement = document.createElement('p')
  var todoDateElement = document.createElement('h6')

  newToDoDiv.appendChild(todoTitleElement)
  newToDoDiv.appendChild(todoDescElement)
  newToDoDiv.appendChild(todoDateElement)

  todoTitleElement.innerText = todo.title
  todoDescElement.innerText = todo.description
  todoDateElement.innerText = todo.date

  newToDoDiv.classList.add('to-do-item')

  toDoItems.appendChild(newToDoDiv)

})

// var todo1 = new ToDo('Wash Dishes', 'Need to clean counter and sink', '08-08-2022', 1)
// console.log(todo1)
//
// console.log(title.value)
