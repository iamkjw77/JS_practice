function getRestCoordinate(array) {
  const answer = [];

  for (let i = 0; i <= 1; i++) {
    if (array[0][i] === array[1][i]) answer.push(array[2][i]);
    else if (array[0][i] === array[2][i]) answer.push(array[1][i]);
    else answer.push(array[0][i]);
  }
  return answer;
}

console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]
console.log(getRestCoordinate([[0, 0], [2, 0], [0, 3]])); // [2, 3]