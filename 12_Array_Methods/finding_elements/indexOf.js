/*
The indexOf() method returns the first index (position) of a specified value.

The indexOf() method returns -1 if the value is not found.


____________ syntax ___________________

array.indexOf(item, start)

 ____________ Parameter ________________

 (1) item ->	Required.  The value to search for.
 (2) start ->	Optional.  Where to start the search.



*/

let fruits = ["Apple","kiwi","Orange","Banana","Litch","pineapple","pear","mango"]

let indexOf = fruits.indexOf("Orange")

let valueIsNot = fruits.indexOf("papaya")

console.log("indexOfOrange =",indexOf)

console.log("itemIsNotInArr =",valueIsNot)

// ========  Start the search at position 4 =================

let searchPosition = fruits.indexOf("pear",4)

console.log(searchPosition)
