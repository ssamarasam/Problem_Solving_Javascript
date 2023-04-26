//recursion using helper method

function collectOddValues(arr) {
    let result = [];

    function oddValues(input) {
        if(input.length === 0) {
            return;
        } 
        if(input[0] % 2 !== 0) {
            result.push(input[0]);
        }
        oddValues(input.slice(1));
    }

    oddValues(arr);
    return result;
}


let input = [1,2,3,4,5,6,7,8,9,99,11,12,13,1,5,17,16,12,22,3]
let result = collectOddValues(input);
console.log(result);