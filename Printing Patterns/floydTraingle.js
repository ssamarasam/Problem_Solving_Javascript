// Print a floyd's triangle based on the given integer R.

// Sample Input :
// 5
// Sample Output :
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let n = 5;
let seq = 1;
let array = [];
for(let i=1; i<=n; i++) {
    for(let j=1; j<=i; j++){
        array.push(seq);
        seq = seq + 1;
    }
    console.log(array.join(" "));
    array = [];
}