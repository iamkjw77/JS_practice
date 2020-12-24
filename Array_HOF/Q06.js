// 내용 중에 하나라도 바뀌면 주소 값을 바꾸고 싶다.(불변성 유지)
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 방법1
// function toggleCompletedById(id) {
//   todos.map(todo => {
//     if (todo.id === id) todo.completed = !todo.completed;
//   });
// }

// 방법2, accessor를 사용하자!
function toggleCompletedById(id) {
  todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo);
}

toggleCompletedById(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/