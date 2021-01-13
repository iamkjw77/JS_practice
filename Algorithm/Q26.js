function findMinDistance(array) {
  array.sort((a, b) => a - b);

  const distance = [];
  const res = [];

  for (let i = 0; i < array.length - 1; i++) {
    distance.push(array[i + 1] - array[i]);
  }

  const min = Math.min(...distance);

  for (let i = 0; i < distance.length; i++) {
    if (min === distance[i]) {
      res.push([array[i], array[i + 1]]);
    }
  }

  return res;
}

// 1차원 점의 배열
const array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]

const arr2 = [-1, -6, -3, 0, -1, 1, 2];
console.log(findMinDistance(arr2)); // [-1, -1]