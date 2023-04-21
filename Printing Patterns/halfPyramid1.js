// Print the below CanvasPattern
// 1
// 12
// 1 3
// 1  4
// 12345


let n = 5;
  let str = '';
  
  for(let i=1; i<=n; i++) {
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