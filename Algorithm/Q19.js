function digitSum(n) {
  if (n > 100000000) return false;
  return (n + '').split('').reduce((acc, cur) => acc + (+cur), 0);
}

console.log(digitSum(123)); // 6
console.log(digitSum(987)); // 24
console.log(digitSum(100000001)); // false
