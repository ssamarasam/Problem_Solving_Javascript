function longestPalindrome(str) {
  let max = 0;
  let longStr;
  let subStr;
  for (let i = 0; i < str.length; i++) {
    subStr = str[i];
    for (let j = i + 1; j < str.length; j++) {
      subStr += str[j];
      if (isPalindrome(subStr) && subStr.length > max) {
        max = subStr.length;
        longStr = subStr;
      }
    }
  }
  return longStr;
}

function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  if (str === rev) {
    return true;
  }
}
console.log(longestPalindrome("DIEHEIDI"));
