// print fibonacci series up to N terms

function fibonacciSeries(num) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    let output = [];

    for(let i=0; i<=num; i++) {
        output.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return output.join(" ");
}

console.log(fibonacciSeries(10));
