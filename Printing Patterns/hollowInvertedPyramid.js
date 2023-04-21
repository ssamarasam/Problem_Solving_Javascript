// Print the hollow Inverted half pyramid pattern using numbers based on the given integer R.

// Sample Input :
// 5
// Sample Output :
// 12345
// 1  4
// 1 3
// 12
// 1


let n = 5;
let str = '';
for(let i=n; i>=1; i--) {
    for(let j=1; j<=i; j++) {
        if (j == 1 || j == i) {
            str = str + j;
        } else if (i == n) {
            str = str + j;
        } else {
            str = str + " ";
        }
        
    }
    console.log(str);
    str = '';
}


