function getArray(arr) {
  return arr.filter(v => !(v % 2) && (v > 3));
}

console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]
console.log(getArray([1, 2, 3, 5])); // []