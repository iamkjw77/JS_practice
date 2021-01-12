function adder(x, y) {
  // let res = 0;
  // for (let i = Math.min(x, y); i <= Math.max(x, y); i++) res += i;
  // return res;
  return ((x + y) * (Math.abs(y - x) + 1)) / 2;
}

console.log(adder(5, 5)); // 5
console.log(adder(5, 3)); // 12
console.log(adder(3, 5)); // 12
console.log(adder(-1, -3)); // -6