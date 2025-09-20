/*

What is forEach?

forEach is an array method in JavaScript.
It executes a callback function once for each element of the array, in order.
It’s often used when you just want to iterate over elements, not transform or filter them


## you cannot directly stop or break out of a forEach loop in JavaScript.

-> Array.prototype.forEach is designed to always iterate through the entire array.
-> break, continue, or return inside the callback won’t stop the loop.
-> return just exits the current callback iteration, but the loop continues.

*/

const numbers = [10, 20, 30];

numbers.forEach((num, idx) => {
  console.log(`Index ${idx}: ${num}`);
});

// output
// Index 0: 10
// Index 1: 20
// Index 2: 30