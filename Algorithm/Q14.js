function findDuplicated(array) {
  const res = {};
  array.forEach(v => {
    if (!res[v]) res[v] = 1;
    else res[v]++;
  });
  return Object.entries(res).reduce((acc, [key, value]) => {
    if (value > 1) acc.push(+key);
    return acc;
  }, []);
}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]
console.log(findDuplicated([-1, -1])); // [ -1 ]
console.log(findDuplicated([-1, -1, -2, -3, 0, 0])); // [ 0, -1 ]
