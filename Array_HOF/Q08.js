let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// function countCompletedTodos() {
//   return todos.filter(todo => todo.completed === true).length
// }

const countCompletedTodos = () => todos.filter(todo => todo.completed).length;

const countNotCompletedTodos = () => todos.filter(todo => !todo.completed).length;

console.log(countCompletedTodos()); // 1
console.log(countNotCompletedTodos()); // 2