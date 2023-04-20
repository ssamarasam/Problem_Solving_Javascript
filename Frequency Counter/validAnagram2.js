function validAnagram(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    if(arr1.length !== arr2.length) {
        return false;
    }

    let obj1 = {};
    
    for(let char of arr1) {
        obj1[char] = ++obj1[char] || 1;
    }
    console.log(obj1);

    for(let char of arr2) {
        if(!obj1[char]) {
            return false;
        } else {
            obj1[char] -= 1;
        }
    }

    return true;


}


let string1 = 'anagram';
let string2 = 'nagaram';

let result = validAnagram(string1, string2)
console.log(result);