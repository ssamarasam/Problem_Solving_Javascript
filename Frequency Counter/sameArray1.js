//check if the 2 given arrays are same

function sameArray(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    let obj1 = {};
    let obj2 = {};
   for(let val of arr1) {
        obj1[val] = ++obj1[val] || 1;
   }

   for(let val of arr2) {
        obj2[val] = ++obj2[val] || 1;
   }

   for(let key in obj1) {
    if(obj1[key] === obj2[key]) {
        return true;
    } else {
        return false;
    }
   }
   return true;
}

let result = sameArray([1, 2, 3, 4, 0], [2, 3, 4, 0, 1]);

console.log(result)