/*

Immutability:

An immutable value is one whose content cannot be changed without creating 
an entirely new value.

In JavaScript, primitive values are immutable — once a primitive value is created, 
it cannot be changed, although the variable that holds it may be reassigned 
another value.

All primitive data types are immutable like number, string, boolean, undefined, 
null, bigInt, symbol

-> "the content cannot be changed” — meaning the value itself isn’t altered.
-> “the variable that holds it may be reassigned another value” — meaning you can 
    make the variable point to a different value.

*/

let a = 10; // value -> 10 is immutable in place
a = 20; // reassigned but not mutated the value of a and older value->10 gets 
    // collected by garbage collector since no variable is pointing to this value

/*
🧠 Why this matters

Mutation would mean changing the contents of the original value (e.g., changing a 
property of an object).

For primitives (numbers, strings, booleans, etc.), there are no properties to 
mutate in that sense — the “value” is atomic and cannot be changed into something 
else in place.

Reassignment is distinct: you change what the variable refers to, not change the 
internal value.

*/

// ===========================================================================

/*
 Mutability:

 A mutable value is one that can be changed without creating an entirely new 
 value, in comparison with immutable values.

 All non-primitive data types are mutable like object, arrays, functions, map, set.
 Their properties and elements can be changed without creating a new object or 
 array

*/

const person = {
    name: "niranjan",
    age: 27,
    education:{
      degree: "B.Tech"
    }
}

person.name = "niru" // mutating original object


// ================ How to Prevent Object Mutability =========================

/*
 To prevent object mutability, you can use the below methods
 1. Object.preventExtensions() 
 2. Object.seal()
 3. Object.freeze() 

*/

// ===================================================================

/* 
  1. Object.preventExtensions() 
     -> prevents new properties from being added to the object.
     -> It does not affect , existing properties (you can still read, update, or 
        delete them), but it does stop creating new properties
     -> but property can be added in nested object 
*/
const car = {
    name: "kia sonet",
    model: 2023,
    engine:{
        cc: 1500,
        type: "petrol"
    }
}

Object.preventExtensions(car)

car.price = '18 lakhs' // new property can't be added
car.papers = ["insurance", 'polution'] // new property can't be added

// property was not added and there's no error message.
console.log(car)

car.torque = '500 horse'

console.log(car) // ✅ property can be added in nested object 


// ## Adding new property with defineProperty

// Object.defineProperty(car, 'brand',{
//     value: "kia",
// })

// // Adding new properties using the define property throws this error message: 
// // ❌ Uncaught TypeError: Cannot define property brand, object is not extensible.

// console.log(car)

// ## ✅ you can modify existing property value using define property
Object.defineProperty(car, 'name',{
    value: "Sonet HTX PLUS",
})
console.log(car)


// ====================================================================

// 2. Object.seal() : 
// you can only update sealed object. adding and deleting property is not possibe

const studentNames = {
    student1: 'Halina',
    student2: "Brookes", 
    student3:"Alina"
}

Object.seal(studentNames)

delete studentNames.student1 // not possible
studentNames.student4 = "Niranjan" // not possible
studentNames.student1 = "Alice" // possible

console.log(Object.isSealed(studentNames)) // true
console.log(studentNames)

// adding using define property

// ❌ Uncaught TypeError: Cannot define property student4, object is not extensible.
Object.defineProperty(studentNames, 'student4', {
  value: "Peter",
})
console.log(studentNames)

// ✅ you can modify existing property using define property


// ====================================================================

/*

Object.freeze(): Using this method guarantees high integrity by ensuring that 
                 pulling out, modifying existing properties, or adding new 
                 properties to the object will not be possible.

Even when you apply the object.freeze to an object, you can add new property, 
modify an existing property, or delete properties from objects nested under it.

*/
const teamplayers = {
    player1: "Andrey",
    player2: "Abundance",
    team:{
        name: "ABC"
    }
}


Object.freeze(teamplayers)

teamplayers.player3 = "Finder"; // not possible, adding property failes silently so there is no error

// adding new property using defineProperty throw error
Object.defineProperty(teamplayers, 'player3', { value: "Finder"}) // ❌ throw err

console.log(teamplayers)


teamplayers.team.size = 11 // all operation is possible for nested object
console.log(teamplayers)


// ====================================================================

/* 
const !== immutability

const prevents reassignment of the variable itself, but does not make the value 
it holds immutable This means:
-> For primitive values (numbers, strings, booleans), const makes the value 
   immutable since primitives are immutable by nature.
   
-> For non-primitive values like objects and arrays, const only prevents 
   reassigning a new object/array to the variable, but the properties/elements 
   of the existing object/array can still be modified.

Defining any variable with const does not make that variable immutable always
bcoz object can still be mutable

*/

const num = 34;
 num = 50; // not possible

 console.log(num); // Uncaught TypeError: Assignment to constant variable.

 // An object that you declared using const is still mutable, so you can still
//   modify the properties of that particular object 

const getObj = {
    color1: "Green",
    color2: "Blue",
    color3: "Yellow"
}

getObj.color1 = "Brown";

console.log(getObj.color1)




     
                      


