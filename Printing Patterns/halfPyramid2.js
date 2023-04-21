// Print the half pyramid pattern based on the given integer R.

// Sample Input :
// 5
// Sample Output :
// 1
// 12
// 123
// 1234
// 12345

let n = 5;
let str = '';
for(let i=1; i<=n; i++) {
    for(let j=1; j<=i; j++) {
        str = str + j;
    }
    console.log(str);
    str = '';
}