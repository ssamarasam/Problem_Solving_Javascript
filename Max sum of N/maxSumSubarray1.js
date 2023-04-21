function maxSumSubArray(arr, num){

    if(arr.length === 0) {
        return null;
    }
    let max = -Infinity;
    for(let i=0; i<arr.length - num + 1; i++) {
        let temp = 0;
        for(let j=0; j<num; j++) {
            temp += arr[i+j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;

}

let input = [9, 3, 4, 1,11, 5, 9, 6, 2, 8];
let sub = 3;

let result = maxSumSubArray(input, sub);
console.log(result);