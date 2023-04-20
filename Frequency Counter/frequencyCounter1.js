// check whether both arrays have the same items 
// order doenst matter
// but frequency of item must match


function frequencyCounter(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    for(let i=0; i<arr1.length; i++) {
        let itemIndex = arr2.indexOf(arr1[i]);
        if(itemIndex === -1) {
            return false;
        } else {
            arr2.splice(itemIndex, 1);
        }
        return true;
    }
}

let arr1 = ['a', 'b', 'c', 'r', 'y', 'b'];
let arr2 = ['a', 'r', 'c', 'b', 'y', 'b'];

console.log(frequencyCounter(arr1, arr2));