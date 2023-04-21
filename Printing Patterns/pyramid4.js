// Print the number half pyramid pattern with the size R.

// Sample Input :
// 5
// Sample Output :
// 55555
// 4444
// 333
// 22
// 1

let n = 5;
let array = [];
for(let i = n; i >= 1; i--) {
    for(let j=1; j<=i; j++) {
        array.push(i);
    }
    console.log(array.join(""));
    array = [];
}