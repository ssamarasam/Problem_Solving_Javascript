// Print the rectangle using stars with R rows and C columns.

// Sample Input :
// 3 5
// Sample Output :
// * * * * *
// * * * * *
// * * * * *


let l = 3;
let b = 5;

let array = [];
for(let i=1; i<=l; i++) {
    for(let j=1; j<=b; j++) {
        array.push('*');
    }
    console.log(array.join(" "));
    array = [];
}
