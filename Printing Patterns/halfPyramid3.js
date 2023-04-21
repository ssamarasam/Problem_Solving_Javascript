// Print the number half pyramid pattern with the size R.

// Sample Input :
// 5
// Sample Output :
// 12345
// 2345
// 345
// 45
// 5


let n = 5;
let str = '';
for(let i=1; i<=n; i++) {
    for(let j=i ; j<=n; j++) {
        str = str + j;
    }
    console.log(str);
    str = '';
}

