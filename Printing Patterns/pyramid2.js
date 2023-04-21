// Print the number half pyramid pattern with the size R.

// Sample Input :
// 5
// Sample Output :
// 1
// 22
// 333
// 4444
// 55555

let n = 5;
let array = [];
for(let i = 1; i <= n; i++) {
    for(let j=1; j<=i; j++) {
        array.push(i);
    }
    console.log(array.join(""));
    array = [];
}