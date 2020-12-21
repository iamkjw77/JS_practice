const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// 방법1
// function render() {
//   let html = '';

//   todos.forEach(todo => {
//     html += `<li id="${todo.id}"><label><input type="checkbox"${todo.completed ? 'checked' : ''} />${todo.content}</label></li>` + '\n';
//   });

//   return html;
// }

// 방법2
// function render() {
//   return todos.map(todo => `<li id="${todo.id}"><label><input type="checkbox"${todo.completed ? 'checked' : ''} />${todo.content}</label></li>` + '\n').join('');
// }

// 방법3
const render = () => todos.map(todo => `<li id="${todo.id}"><label><input type="checkbox"${todo.completed ? 'checked' : ''} />${todo.content}</label></li>` + '\n').join('');

console.log(render());
/*
<li id="3"><label><input type="checkbox" />HTML</label></li>
<li id="2"><label><input type="checkbox"checked />CSS</label></li>
<li id="1"><label><input type="checkbox" />Javascript</label></li>
*/

