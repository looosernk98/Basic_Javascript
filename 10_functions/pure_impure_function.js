//  **************** References ********************

// https://www.freecodecamp.org/news/pure-function-vs-impure-function/
// https://www.educative.io/answers/pure-function-vs-impure-function
// https://www.syncfusion.com/blogs/post/pure-impure-functions-javascript.aspx



/*
 Pure functions return the same output if we use the same input parameters.
 However, impure functions give different outcomes when we pass the same 
 arguments multiple times. Pure functions always return some results. 
 Impure functions can execute without producing anything.
*/

// example of pure function
// Math.pow(2) => 4
// Math.pow(2) => 4
// Math.pow(2) => 4

// some impure functions
// 1. Date.now()
// Date.now()
// Date.now()

console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())