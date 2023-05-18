// Given a number N followed by N numbers. Keep the count of each number and print the maximum repeating number.
// Input Size : N <= 100000
// Sample Testcase :
// INPUT
// 5
// 15 5 -20 -20 -45
// OUTPUT
// -20
let userInput = ["15 5 -20 -20 -45"];
let arr = userInput[0].split(" ");

let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] > 0) {
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }
}
let maxRepeatNumber;
let max = Number.MIN_VALUE;
for (let key in obj) {
  if (obj[key] > max) {
    max = obj[key];
    maxRepeatNumber = key;
  }
}

console.log(maxRepeatNumber);
