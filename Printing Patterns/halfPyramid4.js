// Print the number half pyramid pattern with the size R.

// Sample Input :
// 5
// Sample Output :
// 12345
// 1234
// 123
// 12
// 1

let n = 5;
let str = '';
for(let i=n; i>0 ; i--) {
    for(let j=1; j <= i; j++) {
        str = str + j;
    }
    console.log(str);
    str = '';
}