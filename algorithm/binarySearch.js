function binarySearch(array, target) {
  function sort() {
    for(let i = 0; i < array.length; i++) {
      for(let j = i+1; j < array.length; j++) {
        if(array[i] - array[j] > 0) {
          let tmp = array[i];
          array[i] = array[j];
          array[j] = tmp;
        }
      }
    }
  }
  sort();

  let start = 0;
  let end = array.length -1;
  
  // 이진탐색에서 while을 쓴 이유? 몇 번 돌아야하는지 모르기 때문
  while(start <= end) {
    const mid = Math.floor((end + start) / 2); // 아래에서 재할당되는 경우 없음, const 가능

    if(array[mid] === target) return mid;

    if(array[mid] < target)
      start = mid + 1;
    else
      end = mid - 1;
  }
  return -1;
}

console.log(binarySearch([10, 5, 3, 2, 4, 1], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1