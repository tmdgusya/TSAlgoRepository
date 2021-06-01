const array = [5,2,4,6,1,3]

for(let i = 1; i < array.length; i++) {
    let key = array[i];
    let beforeIdx = i - 1;
    while(beforeIdx >= 0 && array[beforeIdx] > key) {
        array[beforeIdx+1] = array[beforeIdx];
        beforeIdx = beforeIdx - 1;
        array[beforeIdx+1] = key;
    }
}

console.log(array)