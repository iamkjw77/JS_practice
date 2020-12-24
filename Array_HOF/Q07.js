let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 방법1
// function toggleCompletedAll() {
//   todos.map(todo => { todo.completed = true; });
// }

// 방법2, 잊지말고 todos에 재할당
function toggleCompletedAll() {
  todos = todos.map(todo => ({...todo, completed: true}));
}

toggleCompletedAll();

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/