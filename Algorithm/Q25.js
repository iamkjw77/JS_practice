function average(array) {
  return array.reduce((acc, cur) => acc + cur, 0) / array.length;
}

console.log(average([5, 3, 4])); // 4
console.log(average([0, 1, 2])); // 1