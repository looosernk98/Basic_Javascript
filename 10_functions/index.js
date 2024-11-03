//A function is a block of code that performs a specific task.

//Dividing a complex problem into smaller chunks makes your program ...
// easy to understand and reusable.

// Two types of functions
// 1. In-built -> map,filter, reduce
// 2. user-defined 


/*

Function can be ended by two ways:
-> when all lines of code executed
-> when return is encountered

function A(){
    console.log(answer);
}
A()

function B(){
    return ans;
}
const res = B()
console.log('res: ', res);

*/




//The syntax to declare a function is:
function nameOfFunction () {
    // function body  
    console.log('body') 
}

//Calling a Function
// nameOfFunction()


// ************* Function with Parameters ***********
// program to print the text
// declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
// greet(name);

// Note: When a value is passed when declaring a function, it is called parameter.
//  And when the function is called, the value passed is called argument.

// *************** Function Return *********************

// The return statement can be used to return the value to a function call.
// The return statement denotes that the function has ended. Any code after return is not executed.

// If nothing is returned, the function returns an undefined value.

// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;
}

// take input from the user
let number1 = 10;
let number2 = 12;

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);
//In the above program, the sum of the numbers is returned by the function 
// using the return statement. And that value is stored in the result variable.


/*
************ Benefits of Using a Function *******************

1. Function makes the code reusable. You can declare it once and use it multiple times.
2. Function makes the program easier as each small task is divided into a function.
3. Function increases readability.


// advanatges of function - readibility, modularity, reusability

*/