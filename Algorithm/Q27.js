function specialSort(array) {
  return [...array].sort((a, b) => {
    if (a < 0 && b < 0) return b - a;
    return a - b;
  });
}

const testArray = [-1, 1, 3, -2, 2, 0];

console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]

console.log(specialSort([0, -3, 4, 5, -2, -5, 1])); // [ -2, -3, -5, 0, 1, 4, 5 ]
