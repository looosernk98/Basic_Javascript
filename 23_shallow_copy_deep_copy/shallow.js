/*

When you create a shallow copy, a new object is created. The new object has 
its own copy of the top-level properties of the original object. However, 
if any of those properties are objects themselves (nested objects), they 
are still referenced rather than fully copied.

Shallow Copy:

-> Shallow copy creates a new object and copies the references of 
   the original object’s elements into the new object.
-> The new object references the same memory locations as the original
   object for its elements.
-> If any changes are made to the shared elements in the new or original
   object, the changes will be reflected in both.
-> Shallow copy is a relatively faster operation and requires less memory.
-> Shallow copy is suitable when you want to create a new object, but
   you don’t need independent copies of the elements.


Use shallow copy when:

-> You want to create a new object or collection quickly.
-> You don’t want to duplicate the entire structure but only need
   a new reference to the existing elements.
-> Modifying the copied elements simultaneously modifies the original ones as well.

*/



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



//https://www.javascripttutorial.net/es6/javascript-arrow-function/
//https://makimo.com/blog/shallow-and-deep-copies-in-javascript/
