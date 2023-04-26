function stringReverse(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + stringReverse(str.substr(0, str.length - 1));
}

let input = "apple";
let result = stringReverse(input);
console.log(result);
