// function getCurrentWeek() {
//   const res = [];
//   const dayNum = new Date().getDay();
//   const date = new Date().getDate();

//   for (let i = 0; i <= dayNum; i++) {
//     res.push(new Date(new Date().setDate(date - (dayNum - i))).toISOString().slice(0, 10));
//   }

//   for (let i = 7 - dayNum; i < 7; i++) {
//     res.push(new Date(new Date().setDate(date - (dayNum - i))).toISOString().slice(0, 10));
//   }

//   return res;
// }

function getCurrentWeek() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();

  const week = [];

  for (let i = 1; i < 8; i++) {
    const resDay = new Date(year, month, date + (i - day)).toISOString().slice(0, 10);
    week.push(resDay);
  }
  return week;
}

console.log(getCurrentWeek());

/*
오늘이 2020-01-13인 경우,
[
  '2021-01-10',
  '2021-01-11',
  '2021-01-12',
  '2021-01-13',
  '2021-01-14',
  '2021-01-15',
  '2021-01-16'
]
*/