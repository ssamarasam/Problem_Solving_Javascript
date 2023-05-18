// function to merge two sorted arrays and return sorted array

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let results = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// let result = merge([1, 10, 50], [2, 14, 99, 100]);
// console.log(result);

// function to split the arrays to 0 or 1 element and then merge pair of arrays and return the sorted array
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let result = mergeSort([1, 10, 50, 2, 14, 99, 100]);
console.log(result);
