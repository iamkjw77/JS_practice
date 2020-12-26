// 내용 중에 하나라도 바뀌면 주소 값을 바꾸고 싶다. => let 키워드 사용(불변성 유지)
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
  // 재할당
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
/*
데이터 중심으로 뷰를 만들 때(화면을 그릴  때), 데이터와 뷰가 동기를 이루어야한다.
즉, 데이터가 바뀌면 뷰가 바뀌어야 한다.
데이터의 변경 유무를 알 수 있는 가장 쉬운 방법이 참조값이 바뀐 경우이다.
즉, ===을 했을 때, 같지 않은 경우이다.
주소를 바꿔주면 데이터의 변경 유무를 바로 알 수 있다.

mutator 메서드를 사용하면 뷰를 동기화하는 과정이 복잡하다.
따라서 객체의 재할당을 통해 참조값을 변경해서 데이터의 변경유무를 확인하자.
*/