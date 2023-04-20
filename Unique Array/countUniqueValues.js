// return the number of unique elements in an array
function countUniqueValues(arr) {
    if(arr.length === 0) {
        return 0;
    }
    let i = 0;
    let j = i + 1;

    while (j < arr.length) {
        if(arr[i] === arr[j]){
            j += 1
        } else {
            i += 1;
            arr[i] = arr[j];
            j += 1;
        }
    }

    return i + 1;
}

let array = [1, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7,7, 8];
// let array = [1,1,1,1,1,2];  // 2
// let array = [];  // 0
let result = countUniqueValues(array);
console.log(result);