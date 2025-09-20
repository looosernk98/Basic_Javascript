/*

Object.fromEntries() takes an array of key–value pairs (or any iterable of 
[key, value]) and converts it into an object.

It’s basically the reverse of Object.entries().

Syntax:

Object.fromEntries(iterable)

-> iterable: an array (or map, etc.) of [key, value] pairs.

*/


// ========================== Example/ Use Cases =================================

// 1. From array of pairs
const entries = [["name", "Niranjan"], ["age", 25]];

const obj = Object.fromEntries(entries);

console.log(obj);
// { name: "Niranjan", age: 25 }



// 2. From Map

const map = new Map([
    ["name", "Niranjan"],
    ["role", "Developer"]
  ]);
  
  const obj2 = Object.fromEntries(map);
  
  console.log(obj2);
  // { name: "Niranjan", role: "Developer" }


//   3. With transformations

const prices = { apple: 100, banana: 40, orange: 60 };
// Increase all prices by 20
const updated = Object.fromEntries(
  Object.entries(prices).map(([fruit, price]) => [fruit, price + 20])
);

console.log(updated);
// { apple: 120, banana: 60, orange: 80 }



// 4. Filtering object

const user = { name: "Niranjan", age: 25, password: "secret" };
// Remove password field
const safeUser = Object.fromEntries(
  Object.entries(user).filter(([key]) => key !== "password")
);

console.log(safeUser);
// { name: "Niranjan", age: 25 }

  
