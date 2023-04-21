function findNum(arr, val){
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        if(arr[middle] < val) {
            min = middle + 1;
        } else if(arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12];
let result = findNum(arr, 12);
console.log(result);

let result2 = findNum(arr, 6);
console.log(result2);