// function getDayName(a, b) {
//   const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
//   const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   let sum = 0;
//   for (let i = 0; i < a - 1; i++) {
//     sum += month[i];
//   }
//   sum += (b - 1);
//   return day[sum % 7];
// }

function getDayName(a, b) {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayNum = new Date(`2016-${a}-${b}`).getDay();
  return day[dayNum];
}

console.log(getDayName(5, 24)); // TUE
console.log(getDayName(3, 24)); // THU
console.log(getDayName(1, 2)); // SAT