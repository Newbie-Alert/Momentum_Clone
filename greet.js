const greetForm = document.querySelector('.greet-form');
const greetInput = greetForm.querySelector('.greet-input');
const greetCon = document.querySelector('.greet-container');
const clockCon = document.querySelector('.clock-container');
const quoteCon = document.querySelector('.quote-container');
const todoTurnOn = document.querySelector('.todo-switch');

if (localStorage.getItem('username') !== null) {
  greetCon.classList.add('hidden');
  clockCon.classList.remove('hidden');
  quoteCon.classList.remove('hidden');
  todoTurnOn.classList.remove('hidden');
}


greetForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const userName = greetInput.value;
  greetCon.classList.add('hidden');
  clockCon.classList.remove('hidden');
  quoteCon.classList.remove('hidden');
  todoTurnOn.classList.remove('hidden');
  localStorage.setItem('username', userName);
})