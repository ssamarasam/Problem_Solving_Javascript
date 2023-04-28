function isPalindrome(str) {
  if (str === stringReverse(str)) {
    return true;
  } else {
    return false;
  }
}

function stringReverse(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + stringReverse(str.substr(0, str.length - 1));
}

isPalindrome("abcbb");
