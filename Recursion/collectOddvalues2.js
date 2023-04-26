function collectOddValues(arr) {
  let output = [];

  if (arr.length === 0) {
    return output;
  }

  if (arr[0] % 2 !== 0) {
    output.push(arr[0]);
  }

  output = output.concat(collectOddValues(arr.slice(1)));
  return output;
}

let input = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 11, 12, 13, 1, 5, 17, 16, 12, 22, 3,
];
let result = collectOddValues(input);
console.log(result);
