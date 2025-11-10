/*

Prevents adding new properties

Prevents removing existing properties

Prevents changing values of existing properties

Prevents changing property descriptors (e.g., making writable → false)

Basically → the object becomes completely immutable.

*/

const obj = { name: "Niranjan", age: 25 };

Object.freeze(obj);

obj.age = 30;       // ❌ No effect, silently ignores
obj.city = "Delhi"; // ❌ No effect, silently ignores
delete obj.name;    // ❌ No effect , silently ignores

console.log(obj);   // { name: "Niranjan", age: 25 }

// ===================== works on arrays, functions, set, map ===================

const numbers = [12,3,4]
Object.freeze(numbers)
numbers.push(100) // no effect but throw error
console.log(numbers)