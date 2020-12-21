let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// function removeTodo(id) {
//   todos.map((todo, i) => {
//     if(todo.id === id) todos.splice(i, 1);
//   });
// }

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== id);
}

removeTodo(2);
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/