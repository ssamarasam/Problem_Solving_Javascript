// print fibonacci series up to the specified number

function fibonacciSeries(num) {
    let n1 = 0;
    let n2 = 1;
    let output = [];
    let nextTerm = n1 + n2;
    output.push(n1);
    output.push(n2);

    while(nextTerm <= num) {
        output.push(nextTerm);
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
        
    }
    return output.join(" ");
}

console.log(fibonacciSeries(5));