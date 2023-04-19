function charCount(str) {
    let obj = {};
    for(let i=0; i<str.length; i++) {
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(obj[char] > 0) {
                obj[char] += 1;
            } else {
                obj[char] = 1;
            }
        }

    }
    return obj;
}

console.log(charCount("Hello hi how are you?"));