
// arrow functions provide you with an alternative way to write a shorter 
// syntax compared to the function expression

// Properties:
// 1. Arrow functions don't have their own bindings to this, arguments, or super
    // , and should not be used as methods.
// 2. Arrow functions cannot be used as constructors. Calling them with new 
// throws a TypeError. They also don't have access to the new.target keyword.
// 3. Arrow functions cannot use yield within their body and cannot be 
// created as generator functions.


// arrow function in single line
const sum = (a, b) => a + b;
let result = sum(5, 9)
console.log('result: ', result);

// multiline arrow function
const sum2 = (a, b) =>{
    let result = a + b;
    console.log('result: ', result);
}

sum2(3, 7);