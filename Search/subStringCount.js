function subStringCount(fullString, subString) {
  let count = 0;

  for (let i = 0; i < fullString.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (subString[j] !== fullString[i + j]) {
        break;
      }
      if (j === subString.length - 1) {
        count++;
      }
    }
  }
  return count;
}

let result = subStringCount("substringcount", "str");
console.log(result);
