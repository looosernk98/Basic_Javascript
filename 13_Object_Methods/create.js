/*

Object.create(proto, propertiesObject) creates a new object, using the first 
argument (proto) as its prototype.

So instead of using a class or constructor function, you can directly create 
an object with a given prototype.

Synatx:

Object.create(proto, propertiesObject?)

-> proto → the prototype of the new object (can be another object or null).
-> propertiesObject (optional) → property descriptors for the new object (like Object.defineProperties).

*/

const person = {
    greet() {
      console.log("Hello, I am " + this.name);
    }
  };
  
  const user = Object.create(person); // prototype = person
  user.name = "Niranjan";
  
  user.greet(); 
  // Hello, I am Niranjan

//   Here:
// user doesn’t have greet directly.
// It looks up the prototype (person) and finds it.


// 2. Creating an object with no prototype
const obj = Object.create(null);

console.log(obj); // {}
console.log(Object.getPrototypeOf(obj)); // null

// This is often used when you want a “pure dictionary” object without toString, hasOwnProperty, etc.


// 3. Using propertiesObject

// You can define properties with descriptors while creating:
const user = Object.create(Object.prototype, {
    name: { value: "Niranjan", writable: true, enumerable: true },
    age: { value: 25, writable: false }
  });
  
  console.log(user.name); // Niranjan
  console.log(user.age);  // 25
  
  user.age = 30;          // ❌ Won’t change (not writable)
  console.log(user.age);  // 25
  

  