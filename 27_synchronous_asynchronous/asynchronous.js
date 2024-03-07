/*

  Asynchronous programming allows you to write code that does not block 
  the main thread. This means that your program can continue to run even 
  if a particular operation is taking a long time to complete. Asynchronous 
  programming can be more difficult to write and understand, but it can also be 
  faster and more efficient.

  There are a number of ways to write asynchronous code in JavaScript. One 
  common way is to use callbacks. A callback is a function that is passed to 
  another function as an argument. The callback function is then called when 
  the other function is finished executing.

  Another way to write asynchronous code in JavaScript is to use promises. A 
  promise is an object that represents the eventual completion or failure of 
  an asynchronous operation. Promises can be used to chain together multiple 
  asynchronous operations, and to handle errors.

*/

console.log("before");

function add(a, b){
  console.log(a + b);
}

function addAsync(a, b){
    setTimeout(() => {
       add(a, b)
    }, 1000)

}

addAsync(10, 45);

console.log("after");
