/*
    A callback function is a function passed into another function as an argument,
    which is then invoked inside the outer function to complete some kind of 
    routine or action
*/

// outer function
function greet(name, callback) {
    // console.log('callback: ', callback);
    console.log('Hi' + ' ' + name);
    return callback  // = callMe;
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
let func =  greet("peter", callMe) // callback = callMe;
func()
// console.log('func: ', func);