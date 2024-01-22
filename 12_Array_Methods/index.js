/*
  it enables storing a collection of multiple items under a 
  single variable name, and has members for performing common array operations.
  such as push , pop, searching etc.

  In JavaScript, arrays aren't primitives but are instead Array objects
   with the following core characteristics:

  1. JavaScript arrays are resizable and can contain a mix of
    different data types. (When those characteristics are undesirable,
     use typed arrays instead.)
  2. JavaScript arrays are not associative arrays and so, array elements
    cannot be accessed using arbitrary strings as indexes, but must be
    accessed using non-negative integers (or their respective string form)
    as indexes.
  3. JavaScript arrays are zero-indexed: the first element of an array is 
    at index 0, the second is at index 1, and so on — and the last element
    is at the value of the array's length property minus 1.
  4. JavaScript array-copy operations create shallow copies.
    (All standard built-in copy operations with any JavaScript objects
     create shallow copies, rather than deep copies).

*/



let arr = [ [1, 2], ['hi', 'bye'], { name: "alex", age: 23}, 90, false]
const arrKeys = Object.keys(arr)
console.log('arrKeys: ', arrKeys); // will give index as a keys
console.log(typeof arr) // object


const nums = [5,9];
nums[3] = 8; // here we skipped 2nd index so at that place undefined will be stored
console.log('nums: ', nums[2]);

const keys = Object.keys(nums) // 2nd index is empty so will skip 2nd index in keys list
console.log('keys: ', keys);

let arr1 = [1, 3, 8];
let arr2 = arr1;
arr2[0] = -10;  // update
console.log('arr2: ', arr2);
console.log('arr1: ', arr1);


let nums1 = [1, 2, { name: "alex", age: 23}, true];
let nums2 = nums1;

let user = nums2[2];
user.age = 30

console.log('nums1: ', nums1);
console.log('nums2: ', nums2);
console.log('user: ', user);

const names = ['niru', 'preeti', 'ruchi'];

// names[3] = 'tulsi';
// names.push('tulsi');
names.age = 30;
console.log('names: ', names);





