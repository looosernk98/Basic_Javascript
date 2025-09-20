
// Comparison operators compare two values and return a boolean value, either true or false.


// ==	Equal to: returns true if the operands are equal	x == y
// !=	Not equal to: returns true if the operands are not equal	x != y
// ===	Strict equal to: true if the operands are equal and of the same type	x === y
// !==	Strict not equal to: true if the operands are equal but of different type or not equal at all	x !== y
// >	Greater than: true if left operand is greater than the right operand	x > y
// >=	Greater than or equal to: true if left operand is greater than or equal to the right operand	x >= y
// <	Less than: true if the left operand is less than the right operand	x < y
// <=	Less than or equal to: true if the left operand is less than or equal to the right operand	x <= y

// a is bigger than b
// a > b OR  b < a

let a = 10;

if(a == 10){
 console.log("Ten");
}

if(a !== 10){
    console.log("Not Ten");
}

/*

 1. == (Loose Equality)

-> Compares two values after type coercion.
-> If the types are different, JavaScript tries to convert them to the same type 
   before comparing.

Example:

5 == "5"      // true  (string "5" is converted to number 5)
0 == false    // true  (false is converted to 0)
null == undefined // true (special case in JS)


2. === (Strict Equality)

-> Compares two values without type coercion.
-> Both the value and the type must match.

Example:

5 === "5"     // false (number !== string)
0 === false   // false (number !== boolean)
null === undefined // false


*/


