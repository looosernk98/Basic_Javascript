/*
  The JavaScript String.substring() returns the part of the string between the
  start and end indexes.

  ________ Syntax_____________

  str.substring(startIndex [, endIndex])

 The substring() method accepts two parameters: startIndexand endIndex.

(1) The startIndex specifies the index of the first character to include
    in the returned substring.

(2) The endIndex determines the first character to exclude from the returned substring.
   In other words, the returned substring doesn’t include the character at the endIndex.

   If startIndex equals endIndex, the substring() method returns an empty string.

*/

let string = "i hate javascript"

let subStringIt = string.substring('',6)

console.log(subStringIt)


