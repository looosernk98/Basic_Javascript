/*

When you create a shallow copy, a new object is created. The new object has 
its own copy of the top-level properties of the original object. However, 
if any of those properties are objects themselves (nested objects), they 
are still referenced rather than fully copied.

Shallow Copy:

-> In a shallow copy, only the top-level structure is duplicated. Nested objects/arrays
   are not deeply cloned, just their references are copied.
-> For nested objects, both the original and the copy share references to the same 
   underlying objects in memory.
-> If any changes are made to the shared elements in the new or original
   object, the changes will be reflected in both.
-> Shallow copy is a relatively faster operation and requires less memory.
-> Shallow copy is suitable when when you only care about cloning the outer 
   container, not the deeply nested values.


Use shallow copy when:

-> You want to create a new object or collection quickly.
-> You don’t want to duplicate the entire structure but only need
   a new reference to the existing elements.
-> Modifying the copied elements simultaneously modifies the original ones as well.

⚠️ One nuance to add:

If the object has only primitive values (numbers, strings, booleans), then shallow 
copy behaves the same as deep copy, because primitives are copied by value, not by 
reference.
Issues only arise when the object contains nested objects, arrays, or functions.



## When we say “shallow copy copies the reference”, it works like this:

The outer object (the container being copied) gets a new address.
Example:
Original object → 0x4k
Shallow copy → 0x5k

But the nested objects inside are not cloned. Instead, their reference (address) is copied.
Example:
Both 0x4k and 0x5k contain a property pointing to the same inner object, say 0x9k.

So:
Outer objects → different addresses.
Inner nested objects → same address (shared).

*/

const original = { name: "Niru", address: { city: "Bangalore" } };

// Shallow copy (spread operator)
const shallow = { ...original };

console.log(original === shallow); // false (different outer objects)

console.log(original.address === shallow.address); // true (same inner object)






/*

Directly assigning an object to another variable does not create a copy at all; 
instead, it creates a reference to the original object. This means both 
variables point to the same object in memory.

 const copy = original // not a shallow copy
*/


const originalObject = { a: 1, b: { c: 2 } };
const shallowCopy = { ...originalObject }; // Shallow copy using spread operator

shallowCopy.a = 99;
console.log(originalObject.a); // Output: 1 (originalObject is NOT modified)

shallowCopy.b.c = 42;
console.log(originalObject.b.c); // Output: 42 (nested object IS modified)




/*
  To create a shallow copy, we can use the following methods:

1. Spread syntax […] {…}
2. Object.assign()
3. Array.from()
4. Object.create()
5. Array.prototype.concat()


*/

/*

## Primitive behaviour in shallow copy:

-> Primitives in JavaScript are copied by value, not by reference.
-> That means when a shallow copy happens, the new object gets its own copy of 
   the primitive.
-> Even if the value is the same, there’s no shared memory location like with objects.

*/


console.log(original.name === shallow.name); // true (same value)
console.log(original.name === shallow.name); // still true, but not a shared reference


// 🔹 Step 1: Every property lives in an object’s own memory “slot”

// When you create an object like:
const _original = { name: "Niru" };

// The object original is at some address (say 0x4k).
// Inside it, there’s a key "name" that points to the primitive "Niru".


// 🔹 Step 2: Shallow copy creates a new object with new slots
const copy = { ..._original };

// copy is a different object (say 0x5k).

// It also has a "name" key pointing to a value "Niru".

// Now we have two slots (original.name and copy.name).
// Both slots store the same primitive value, but they don’t share a mutable 
// reference (because primitives are immutable).

// 🔹 Step 3: Do primitives have addresses?

/*
Yes, but with a nuance:

In JS, primitives are stored by value. That means each slot in the object directly 
stores the value, not a pointer to a mutable object.

Engines may optimize storage (e.g., strings may be interned, meaning "Niru" 
could exist in a string pool with one memory address).

But from the JavaScript developer’s perspective, they behave like separate 
independent values, not shared references.
*/


copy.name = "Kumar";

console.log(_original.name); // "Niru"
console.log(copy.name);     // "Kumar"

// Changing copy.name does not affect original.name.
// That’s because the "name" slot in each object stores its own value.

// Yes, after copying, there will be two separate "name" properties in memory 
// (one in original, one in copy).

// Both may point to the same underlying string constant "Niru" in the engine’s 
// string pool (optimization detail).

// But since primitives are immutable, there’s no way for one to change and affect the 
// other.






//https://www.javascripttutorial.net/es6/javascript-arrow-function/
//https://makimo.com/blog/shallow-and-deep-copies-in-javascript/
