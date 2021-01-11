function isHarshad(n) {
  const sum = (n + '').split('').reduce((acc, cur) => acc + (+cur), 0);
  return !(n % sum);
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false