/*

Prevents adding new properties

Prevents removing existing properties

Prevents changing values of existing properties

Prevents changing property descriptors (e.g., making writable → false)

Basically → the object becomes completely immutable.

*/

const obj = { name: "Niranjan", age: 25 };

Object.freeze(obj);

obj.age = 30;       // ❌ No effect
obj.city = "Delhi"; // ❌ No effect
delete obj.name;    // ❌ No effect

console.log(obj);   // { name: "Niranjan", age: 25 }