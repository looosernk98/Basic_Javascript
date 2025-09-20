/*

Object.entries(obj) returns an array of key–value pairs from the given object.

-> Keys are always strings (or symbols converted to strings).
-> Values are whatever is stored in the object.

*/
const user = { name: "Niranjan", age: 25 };

console.log(Object.entries(user)); // [ ["name", "Niranjan"], ["age", 25] ]
// So:

// First element → ["name", "Niranjan"]
// Second element → ["age", 25]


// =============================== Typical Use Cases ================================================


// 1. Iterating with for...of

for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}
// output: 
// name Niranjan
// age 25


//   2. Converting object → Map
const map = new Map(Object.entries(user));
console.log(map.get("name")); // "Niranjan"


// 3. Filtering or transforming objects

const prices = { apple: 100, banana: 40, orange: 60 };

// Increase all prices by 10
const updated = Object.fromEntries(
  Object.entries(prices).map(([fruit, price]) => [fruit, price + 10])
);

console.log(updated);
// { apple: 110, banana: 50, orange: 70 }
