// type conversion is the process of converting data of one type to another.
//  For example: converting String data to Number.

// There are two types of type conversion in JavaScript.

// Implicit Conversion - automatic type conversion
// Explicit Conversion - manual type conversion

// Rules of type coercion
/*
So, here are the rules for type coercion in JavaScript:

-> If either operand is a string, the other operand will be converted to a string.
If either operand is a number, the other operand will be converted to a number.

-> If either operand is a boolean, it will be converted to a number (true becomes 1 
and false becomes 0).

-> If one operand is an object and the other is a primitive value, the object will be
converted to a primitive value before the comparison is made.

-> If one of the operands is null or undefined, the other must also be null or 
undefined to return true. Otherwise it will return false.

*/