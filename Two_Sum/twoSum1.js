function twoSum(array, sum){
    for(let i=0; i<array.length; i++) {
        for (let j=i+1; j<array.length; j++) {
            if(array[i] + array[j] === sum){
                return [array[i], array[j]];
            }
        }
    }
}

let arr = [1, 2, 90, 8, 3, 4];

let result = twoSum(arr, 10);
console.log(result);