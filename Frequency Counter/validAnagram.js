function validAnagram(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    if(arr1.length !== arr2.length) {
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for(let char of arr1) {
        obj1[char] = ++obj1[char] || 1;
    }

    for(let char of arr2) {
        obj2[char] = ++obj2[char] || 1;
    }

    for(let key in obj1) {
        if(obj1[key] !== obj2[key]) {
            return false;
        } 
        
    }
    return true;
}


let string1 = 'anagram';
let string2 = 'nagaran';

let result = validAnagram(string1, string2)
console.log(result);