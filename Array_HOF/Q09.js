let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// function getMaxId() {
//   const idArr = todos.map(v => v.id); 
//   // todos가 빈배열이면 -Infinity가 뜬다 → 방어코드가 필요
//   // return todos.length ? Math.max(...idArr) : 0;
//   return Math.max(...idArr, 0);
// }


const getMaxId = () => Math.max(...todos.map(v => v.id), 0);
console.log(getMaxId()); // 3