/*
 -> The includes() method returns true if an array contains a specified value.
 -> The includes() method returns false if the value is not found.
 -> The includes() method is case sensitive.

____________ syntax ___________________

 array.includes(element, start)

 ____________ Parameter ________________

 (1) element ->	Required.  The value to search for.
 (2) start ->	Optional   Start position ( included)

*/

let fruits = ["Apple", "Banana", "Orange", "Litch"];

let isItemIncluded = fruits.includes("kiwi");

console.log("is kiwi included =", isItemIncluded);

// ========  Start the search at position 2 =================

let vegetables = ["patato", "onine", "tomato", "peas", "ginger", "garlic"];

let searchTomato = vegetables.includes("tomato", 2);

console.log("searchTomato", searchTomato);

/* 
 NOTE: we can also check if an object is included in array or not but 
      the reference must be same. check below example
*/

const robin = { // 5k
  name: "robin",
  age: 20,
};

let arr = [
  robin,  // 5k
  {
    name: "tanya",  // 6k
    age: 21,
  },
  {
    name: "niranjan",
    age: 26,
  },
];
const robinExists = arr.includes(robin);
console.log("robinExists: ", robinExists);

const tanyaExist = arr.includes({ name: 'tanya', age:21}) // 10k
console.log('tanyaExist: ', tanyaExist);
