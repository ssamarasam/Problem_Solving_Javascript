function power(b, e) {
  if (e === 0) return 1;
  return b * power(b, e - 1);
}

let result = power(10, 4);
console.log(result);
