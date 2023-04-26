function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

let input = [1, 2, 3, 5];
let result = productOfArray(input);
console.log(result);
