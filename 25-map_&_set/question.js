const arr = [1, 2, 3, 1, 2, 9, 5];
// Q1. return new array containing unique elements from the given array
// Q2. find duplicates elements in array


// sorting -> ascending, descending
// 1,2,3,4 -> ascending
// 4,3,2,1 -> decending

// Arrays.sort(arr) // -> by default ascending
// 1,1,1,2,2,3,5,9

// const set = new Set(arr)
// console.log('set: ', set);

// [1, 1, 3, 2, 2, 9, 5] // arr
// [1, 2, 3, 9, 5 ] // set

arr.sort((a, b) => b - a);
console.log('arr: ', arr);

