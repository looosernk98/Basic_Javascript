/*
 The toUpperCase() method returns a new string with all characters converted to uppercase

  ____________ syntax __________________

   str.toUpperCase()
   str.toLowerCase()

 It’s important to notice that a string is immutable. Therefore, the toUpperCase()
 method doesn’t change the original string. Instead, it returns a new string with all
  characters converted to uppercase.

  If you call the toLowerCase() method on null or undefined, the method will
   throw a TypeError exception.

*/

let message = "Hello World"

let upperCase = message.toUpperCase()

console.log("message =",message)
console.log("upperCase =",upperCase)


let lowerCase = message.toLowerCase()

console.log("message =",message)
console.log("lowerCase =",lowerCase)


