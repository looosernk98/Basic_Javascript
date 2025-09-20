/*

Prevents adding new properties

Prevents removing properties

✅ Allows modifying existing property values

❌ But you cannot reconfigure property descriptors (e.g., make non-writable → writable).

*/

const obj = { name: "Niranjan", age: 25 };

Object.seal(obj);

obj.age = 30;       // ✅ Allowed // can assign any value , even object
obj.city = "Delhi"; // ❌ Not allowed
delete obj.name;    // ❌ Not allowed

console.log(obj);   // { name: "Niranjan", age: 30 }