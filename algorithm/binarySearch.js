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
  let mid;
  
  while(start <= end) {
    mid = Math.floor((end + start)/2);
    if(array[mid] < target) 
      start = mid + 1;
    else if(array[mid] > target) 
      end = mid - 1;
    else 
      return mid;
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