function charCount(str) {
    let obj = {};
    for(let i=0; i<str.length; i++) {
        let char = str[i].toLowerCase();
        if(isAlphaNumeric(char)) {
            if(obj[char] > 0) {
                obj[char] += 1;
            } else {
                obj[char] = 1;
            }
        }

    }
    return obj;
}


function isAlphaNumeric(char) {
    let charCode = char.charCodeAt(0);
    if(!(charCode > 47 && charCode < 58) &&
       !(charCode > 96 && charCode < 123) &&
       !(charCode > 64 && charCode < 91)) {
        return false;
      } else {
        return true;
      }
      
} 


console.log(charCount("Hello hi how are you?"));