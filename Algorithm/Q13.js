function isNotOverlapArray(array) {
  const arr = [...array].sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) return false;
  }
  return true;
}

console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3])); // false
console.log(isNotOverlapArray([1, 1, 3])); // false
