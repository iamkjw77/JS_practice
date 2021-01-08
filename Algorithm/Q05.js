// function toWeirdCase(s) {
//   return s.split(' ').map(v => {
//     return [...v].map((ele, idx) => {
//       return (idx % 2 === 0) ? ele.toUpperCase() : ele.toLowerCase();
//     }).join('');
//   }).join(' ');
// }

function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, v => v[0].toUpperCase() + v[1].toLowerCase());
}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
