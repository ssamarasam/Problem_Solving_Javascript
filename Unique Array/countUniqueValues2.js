// return the number of unique elements in an array
function countUniqueValues(arr) {
    if(arr.length === 0) {
        return 0;
    }
    let i = 0;
    for(let j=1; j<arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

let array = [1, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7,7, 8, 8, 8, 8];
// let array = [1,1,1,1,1,2];  // 2
// let array = [];  // 0
let result = countUniqueValues(array);
console.log(result);