/*

  JavaScript is a single-threaded, synchronous programming language. This 
  means that JavaScript code executes one line at a time, from top to bottom,
  in the order it is written. If a line of code takes a long time to execute, 
  the entire program will be blocked until that line is finished.

  Synchronous code can be easy to write and understand, but it can also be 
  slow and inefficient. For example, if you are making an HTTP request to a 
  server, your program will be blocked until the server responds. This can be 
  a problem if the server is slow or unresponsive

*/

console.log("Hello world");

function f1(){
    console.log("this is f1");
}
f1()

function f2(){
    console.log("this is f2");
}
f1()

console.log("Bye Bye");