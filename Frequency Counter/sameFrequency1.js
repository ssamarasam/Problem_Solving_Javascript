// sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
    let arr1 = num1.toString().split("");
    let arr2 = num2.toString().split("");

    if(arr1.length !== arr2.length) return false;

    let obj = {};
    for(let i=0; i<arr1.length; i++) {
        obj[arr1[i]] = ++obj[arr1[i]] || 1;
    }
    for(let i=0; i<arr2.length; i++) {
        if(!obj[arr2[i]]) {
            return false;
        } else {
            obj[arr2[i]] -= 1;
        }
    }
    return true;
}

let result = sameFrequency(181, 811);
console.log(result);