function getRestCoordinate(array) {
  const x = {};
  const y = {};
  const answer = [];

  array.forEach(v => {
    if (!x[v[0]]) x[v[0]] = 1;
    else x[v[0]]++;

    if (!y[v[1]]) y[v[1]] = 1;
    else y[v[1]]++;
  });

  Object.entries(x).reduce((acc, [key, value]) => {
    if (value === 1) acc.push(+key);
    return acc;
  }, answer);

  return Object.entries(y).reduce((acc, [key, value]) => {
    if (value === 1) acc.push(+key);
    return acc;
  }, answer);
}

console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]
console.log(getRestCoordinate([[0, 0], [2, 0], [0, 3]])); // [2, 3]