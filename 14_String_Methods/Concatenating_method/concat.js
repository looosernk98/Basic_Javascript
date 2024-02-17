/*
 The String.prototype.concat() method accepts a list of strings and returns a new
 string that contains the combined strings.

    ____________ syntax __________________

  string.concat(str1, [...strN]);


->  The concat() method concatenates a string list and returns a new string that
     contains the combined strings.

->  Use + or += operator to concatenate strings for better performance.

*/

let say = "Hello"

let message = say.concat(" ","Ruhi");

console.log(message);

//  Concatenating an array of strings

let colors = ["red"," ","green"," ","yellow"," ","pink"," ","black"]

let result = "".concat(...colors)

console.log(result)