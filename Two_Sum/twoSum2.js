function twoSum(array, sum) {
    let left = 0;
    let right = array.length -1;
    while(left < right) {
        let total = array[left] + array[right];
        if (total === sum) {
            return [array[left], array[right]]
        } else if ( total > 0) {
            right--;
        } else {
            left++;
        }
    }
    return 'Not found';
}

let arr = [-3, -2, 0, 1, 2, 4]

let result = twoSum(arr, 0);
console.log(result);
console.log(result);
