function fib(num) {
  let n1 = 1;
  let n2 = 1;
  let nextTerm;
  let i = 3;
  while (i <= num) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    i++;
  }
  return nextTerm;
}

let result = fib(35);
console.log(result);
