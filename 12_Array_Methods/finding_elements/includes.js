/*
 The includes() method returns true if an array contains a specified value.

 The includes() method returns false if the value is not found.

 The includes() method is case sensitive.

____________ syntax ___________________

 array.includes(element, start)

 ____________ Parameter ________________

 (1) element ->	Required.  The value to search for.
 (2) start ->	Optional   Start position.

*/

let fruits = ["Apple","Banana","Orange","Litch",]

let isItemIncluded = fruits.includes("kiwi")

console.log("is kiwi included =", isItemIncluded)

// ========  Start the search at position 2 =================

let vegetables = ["patato","onine","tomato","peas","ginger","garlic"]

let searchPosition = vegetables.includes("ginger",2)

console.log(searchPosition)