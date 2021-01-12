function adjacentElementsProduct(arr) {
  let res = 0;
  for (let i = 1; i < arr.length; i++) {
    const tmp = arr[i - 1] * arr[i];
    res = res > tmp ? res : tmp;
  }
  return res;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([0, 0, 1, 2, 3])); // 6