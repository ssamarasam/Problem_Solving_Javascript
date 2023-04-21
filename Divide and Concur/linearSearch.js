function findNum(arr, val){
    for(let i=0; i< arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12];
let result = findNum(arr, 7);
console.log(result);

let result2 = findNum(arr, 6);
console.log(result2);