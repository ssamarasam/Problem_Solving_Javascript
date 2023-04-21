function maxSumSubArray(arr, num) {
    let tempSum = 0;
    let maxSum = 0;
    if(arr.length < num) return null;

    for(let i=0; i< num ; i++) {
        maxSum += arr[i]
    }

    tempSum = maxSum;

    for(let i=num; i<arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

let input = [9, 3, 4, 1,11, 5, 90, 6, 2, 8];
let sub = 3;

let result = maxSumSubArray(input, sub);
console.log(result);