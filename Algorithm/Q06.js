// function hideNumbers(str) {
//   return [...str].map((v, i) => i < str.length-4 ? v = '*' : v).join('');
// }

function hideNumbers(str) {
  return '*'.repeat(str.length-4) + str.slice(-4);
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888