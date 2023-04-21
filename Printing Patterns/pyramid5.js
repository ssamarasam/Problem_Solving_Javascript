// Print the star inverted pyramid with the given integer R.

// Sample Input :
// 5
// Sample Output :
// *  *  *  *  *
// *  *  *  *
// *  *  *
// *  *
// *


let n = 5;
let array = [];

for(let i = n; i >= 1; i--) {
    for(let j=1; j<=i; j++) {
        array.push("*");
    }
    console.log(array.join("  "));
    array = [];
}