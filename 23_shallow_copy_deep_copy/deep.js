/*

-> Deep copy creates a new object and recursively copies the elements of the original object, including any objects referenced within it.
-> The new object has its own memory locations for all the elements, including the referenced objects.
-> Changes made to the elements in the deep copy do not affect the original object or any other copied objects.
-> Deep copy is a relatively slower operation and requires more memory, especially for complex data structures.
-> Deep copy is suitable when you want to create a completely independent copy of an object, including all its nested objects.


Use deep copy when:

-> You need a completely independent copy of the original object.
-> You want to modify the copied elements without affecting the original ones.
-> The structure you’re copying contains nested objects or collections that also need to be copied.

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

const copy = JSON.parse(JSON.stringify(original))


copy.name = "byran"
copy.hobbies.push('listening music')

console.log('copy: ', copy);
console.log('original: ', original);

/*
  To create a deep copy, we can use the following methods:

Using Spread Operator
Using Object.assign() method
Using Json.parse() and Json.stringify()

*/
