

// array to hold the todo list items
let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };
  
  todoItems.push(todo);
  renderTodo(todo);

}

// Select the form element
const form = document.querySelector('.js-form');

// Add a submit event listener
form.addEventListener('submit', (event) => {
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
  // to select first element on the list
  const list = document.querySelector('.js-todo-list');

  // if true assign done to isChecked
  const isChecked = todo.checked ? 'done' : '';

  // creating new list element
  const node = document.createElement('li');

  // setting class attribute
  node.setAttribute('class', `todo-item ${isChecked}`);

  // setting data-key attribute
  node.setAttribute('data-key', todo.id);

  // setting contents of the list html form
  node.innerHTML = `
  <input id="${todo.id}" type="checkbox"/>
  <label for="${todo.id}" class="tick js-tick"></label>
  <span>${todo.text}</span>
  <button class="delete-todo js-delete-todo">
  <svg><use href="#delete-icon"></use></svg>
  </button>
`;

  // to add item to the list
  list.append(node);
}

// Select the entire list
const list = document.querySelector('.js-todo-list');
// Add a click event listener to the list and its children
list.addEventListener('click', (event) => {
});
