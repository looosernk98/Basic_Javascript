
// How to deep freeze any object

// const arr = [1,2,3]
// Object.freeze(arr)
// arr.push(4)
// console.log(arr)


const ALWAYS_IMMUTABLE = true;

try {
  ALWAYS_IMMUTABLE = false;
} catch (err) {
  console.log("Can't reassign an immutable reference.");
}

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]