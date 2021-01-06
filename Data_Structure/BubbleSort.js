function BubbleSort(array) {
    for(let i = array.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(array[j] - array[j + 1] > 0){
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(BubbleSort([2, 4, 5, 1, 3])); // [ 1, 2, 3, 4, 5 ]
console.log(BubbleSort([2, 1, 2, 3, -1, 0])); // [ -1, 0, 1, 2, 2, 3 ]
