/*
 A programming language is said to have First-class functions when functions in 
 that language are treated like any other variable.

 In JavaScript, first-class functions refer to the concept that functions are 
 treated as first-class citizens. 
 This means functions can be:
 -> Assigned to variables
 -> Passed as arguments to other functions
 -> Returned from other functions
 -> Stored in data structures like arrays or objects:

*/

//********************** Assigned to variables ***************************/
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Niranjan")); // Output: Hello, Niranjan!


//********************** Passed as arguments to other functions ***************************/
function sayHello(name) {
    return `Hello, ${name}!`;
}

function logGreeting(greetFunction, name) {
    console.log(greetFunction(name));
}

logGreeting(sayHello, "Niranjan"); // Output: Hello, Niranjan!


//********************** Returned from other functions ***************************/
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10


//********************** Stored in data structures like arrays or objects ***************************/
const operations = [
    function(a, b) { return a + b; },
    function(a, b) { return a - b; }
];
console.log(operations[0](5, 3)); // Output: 8
console.log(operations[1](5, 3)); // Output: 2

