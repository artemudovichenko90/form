'use strict';
//v1 просто добавляю в DOM
// const form = document.forms.rootForm;
// const list = document.getElementById('list');
// const messages = [];
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const inputValue = e.target.elements.inputText.value.trim();
//   if (inputValue) {
//     messages.push(inputValue);
//     e.target.reset();
//   }
//   addToList(inputValue);
// });
// function addToList(inputValue){
//   const li = document.createElement('li');
//   li.append(document.createTextNode(inputValue));
//   list.append(li);
// }

//v2  удаляю все li элементы и записываю их по новой
const form = document.forms.rootForm;
const list = document.getElementById('list');
const messages = [];
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = e.target.elements.inputText.value.trim();
  if (inputValue) {
    messages.push(inputValue);
    e.target.reset();
  }
  render();
});
function render() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  messages.forEach(v => {
    const li = document.createElement('li');
    li.append(document.createTextNode(v));
    list.append(li);
  });
}