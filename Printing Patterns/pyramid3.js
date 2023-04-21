// Print the pyramid pattern using stars based on the given integer R.

// Sample Input :
// 6
// Sample Output :
//      *
//     **
//    ***
//   ****
//  *****
// ******

let n = 6;
for(let i=1; i<=n; i++) {
    console.log(" ".repeat(n-i) +  "*".repeat(i));
}