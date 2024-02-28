/*

-> Shallow copy and deep copy are two different approaches to copying objects or data structures

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

const original = {
    name: "alex",
    age: 23,
    state: 'delhi',
    hobbies: ['badminton', 'cricket', 'watching movies'],
    family: {
      father_name: 'mohan',
      father_age: 45,
      hobbies: ["reading"]
    }
}
const copy = original



copy.name = "byran"
copy.hobbies.push('listening music')

console.log('copy: ', copy);
console.log('original: ', original);




/*
  To create a shallow copy, we can use the following methods:

1. Spread syntax […] {…}
2. Object.assign()
3. Array.from()
4. Object.create()
5. Array.prototype.concat()


*/

// const copy = { ...original} // spread operator always shallow copies the object
// const copy = Object.assign({}, original)


//https://www.javascripttutorial.net/es6/javascript-arrow-function/
//https://makimo.com/blog/shallow-and-deep-copies-in-javascript/
