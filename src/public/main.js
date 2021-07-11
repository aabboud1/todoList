

// array to hold the todo list items
let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };
  //adds item that is created to the array above
  todoItems.push(todo);
  //using to test and show todo items in my console
  console.log(todoItems);
}

// Select the form element
const form = document.querySelector('.js-form');

// Add a submit event listener
form.addEventListener('submit', event => {
  // stop page refresh
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  // Get the input then remove whitespace
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

function renderTodo(todo) {

}