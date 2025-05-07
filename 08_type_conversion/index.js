// type conversion is the process of converting data of one type to another.
//  For example: converting String data to Number.

// There are two types of type conversion in JavaScript.

// Implicit Conversion - automatic type conversion
// Explicit Conversion - manual type conversion

// Rules of type coercion
/*
So, here are the rules for type coercion in JavaScript:

1. If either operand is a string, the other operand will be converted to a string.
If either operand is a number, the other operand will be converted to a number.

*/

console.log(2 + "3")
console.log("3" + 2)

console.log(2 + true)
console.log(2 + false)

console.log("2" + true)
console.log("2" + false)

console.log(2 + undefined)
console.log(2 + null)

console.log("2" + undefined)
console.log("2" + null)

/*

2. If either operand is a boolean, it will be converted to a number (true becomes 1 
and false becomes 0).

*/

console.log(true + null) // 1
console.log(false + null) // 0

console.log(true + undefined) // NAN
console.log(false + undefined) // NAN

console.log(true + 1) // 2
console.log(false + 1) // 1

/*
3. If one operand is an object and the other is a primitive value, the object will be
converted to a primitive value before the comparison is made.
*/
console.log({name:"alex"} + 1)
console.log({} + true)

/*
4. If one of the operands is null or undefined, the other must also be null or 
undefined to return true. Otherwise it will return false.
*/

console.log(null === null) // true
console.log(undefined == undefined) // true

console.log(undefined === NaN)
console.log(undefined + NaN)
console.log(null + NaN)
