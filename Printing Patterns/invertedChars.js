// Print the inverted character pattern from the given input size R.

// Sample Input :
// 5
// Sample Output :
// bbbb*bbbb
// bbb***bbb
// bb*****bb
// b*******b
// *********

let n = 5;
let j = 0;
for(let i=1; i<= n; i++) {
    console.log('b'.repeat(n-i) + '*'.repeat(j+i) + 'b'.repeat(n-i));
    j += 1;
}