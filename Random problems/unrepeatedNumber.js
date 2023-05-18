// Given a number N and an array of N elements, every number is repeated except for one. Print that one number.
// Input Size : 1 <= N <= 100000
// Sample Testcase :
// INPUT
// 10
// 1 2 3 2 3 3 2 5 5 2
// OUTPUT
// 1

let userInput = ["1 2 3 2 3 3 2 5 5 2"];

let arr = userInput[0].split(" ");
// console.log(arr);
let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] > 0) {
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }
}

// console.log(obj);
for (let key in obj) {
  if (obj[key] === 1) {
    console.log(obj[key]);
  }
}
