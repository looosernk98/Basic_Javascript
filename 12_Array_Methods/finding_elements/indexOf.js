/*
The indexOf() method returns the first index (position) of a specified value.
The indexOf() method returns -1 if the value is not found.

____________ syntax ___________________

array.indexOf(item, start)

 ____________ Parameter ________________

 (1) item ->	Required.  The value to search for.
 (2) start ->	Optional.  Where to start the search.



*/

let fruits = ["Apple","kiwi","Orange","Banana","Orange","Litch","pineapple","pear","mango"]

let indexOf = fruits.indexOf("Orange")

let valueIsNot = fruits.indexOf("papaya")

console.log("indexOfOrange =",indexOf)

console.log("itemIsNotInArr =",valueIsNot)

// ========  Start the search from position 4 =================

let searchPosition = fruits.indexOf("pear",5)

console.log('searchPosition',searchPosition)

/* 
 NOTE: we can also check index of object in array but 
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
  const robinIndex = arr.indexOf(robin);
  console.log("robinIndex: ", robinIndex);

  const niruIndex = arr.indexOf({ name: 'niranjan', age:26})
  console.log('niruIndex: ', niruIndex);

  
