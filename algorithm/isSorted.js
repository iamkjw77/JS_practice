function isSorted(array) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] > array[i + 1]) return false;
        }
        return true;
}

console.log(isSorted([0, 2, 3])); // true
console.log(isSorted([-10, 1, 0])); // false