/*
  The String.split() divides a string into an array of substrings.

   ____________ Syntax ________________

    split([separator, [,limit]]);
    The split() accepts two optional parameters: separator and limit.

      (1) separator

 The separator determines where each split should occur in the original string.
 The separator can be a string. Or it can be a regular expression.

 If you omit the separator or the split() cannot find the separator in the string,
 the split() returns the entire string.

     (2) limit

 The limit is zero or positive integer that specifies the number of substrings.
 The split() method will stop when the number of substrings equals to the limit.

 If the limit is zero, the split() returns an empty array. If the limit is 1, 
 the split() returns an array that contains the string.
*/


let string = "I Hate Javascript"
let splitIt = string.split()

console.log("original-string =",string)
console.log("split-string =",splitIt)
