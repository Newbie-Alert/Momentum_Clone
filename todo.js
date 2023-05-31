const todoCon = document.querySelector('.todo-container');
const todoList = document.querySelector('.todo');
const todoForm = todoList.querySelector('.todo-form');
const todoInput = todoList.querySelector('form input');
const todoSwitch = document.querySelector('.todo-switch');

todoSwitch.addEventListener('click', function () {
  todoCon.classList.toggle('hidden');
})

let todoArr = [];

function localSave(id) {
  const itemObj = {
    name: todoInput.value,
    id: id,
  }
  todoArr.push(itemObj);
  localStorage.setItem('todo', JSON.stringify(todoArr));
}

function deleteItem(e) {
  const target = e.target.parentElement;
  target.remove();
  todoArr = todoArr.filter((data) => data.id !== parseInt(target.id))
  localStorage.setItem('todo', JSON.stringify(todoArr));
}

function createList() {
  const li = document.createElement('li');
  li.innerText = `${todoInput.value}`;
  const span = document.createElement('span');
  const delBtn = span;
  span.innerText = '  x'
  todoList.appendChild(li);
  li.appendChild(span);
  let id = li.id;
  id = Date.now();
  li.id = Date.now();
  localSave(id)
  delBtn.addEventListener('click', function (e) {
    deleteItem(e)
  })
}

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  createList();
  todoInput.value = ''
})

if (localStorage.getItem('todo') !== null) {
  const savedData = JSON.parse(localStorage.getItem('todo'));
  JSON.parse(localStorage.getItem('todo')).forEach(data => {
    todoArr.push(data);
  });
  savedData.forEach(data => {
  const li = document.createElement('li');
  li.innerText = `${data.name}`;
    li.id = data.id;
  const span = document.createElement('span');
  span.innerText = '  x'
  
  todoList.appendChild(li);
  li.appendChild(span);
    
    
  const delBtn = span;
  delBtn.addEventListener('click', function (e) {
    deleteItem(e)
  })
  })
}