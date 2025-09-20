//The increment (++) and decrement (--) operators
//  are used in JavaScript to increase or decrease the value of a variable by 1.

// Post increment(x++) -> the increment operator increments and returns the value before incrementing.
 let a = 9; 
 let b = 1 + a++ + 7 + a++; // 1 + 9 + 7 + 10
 console.log('values ',a,  b);

 let x = 2;
 let y = x++ + x++ + ++x + x++;
 console.log("values:", x, y)

 

// pre increment(++x) -> the increment operator increments and returns the value after incrementing.
let c = 2;
let d = c-- + c++ + --c + c++; // 2 + 1 + 1 + 1
console.log("values of c , d: ", c, d)