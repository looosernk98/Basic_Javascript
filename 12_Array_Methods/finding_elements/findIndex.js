/*

->  findIndex method executes a function for each array element.
->  findIndex method returns the index (position) of the first element that passes a test.
->  findIndex method returns -1 if no match is found.
->  findIndex method does not execute the function for empty array elements.
->  findIndex method does not change the original array.

   ________ Syntax __________

array.findIndex(function(currentValue, index, array), thisValue)

 _________Parameters _________

(1) function()	Required. A function to be run for each array element.
(2) currentValue  Required. The value of the current element.
(3)  index	     Optional.  The index of the current element.
(4)  array  	Optional.    The array of the current element.
(5) thisValue	Optional.   Default undefined.
A value passed to the function as its this value.

*/


let array = [3, 9, 9, 2, 3];

let firstEvenEleIndex = array.findIndex((element) => element % 2 == 0);
console.log("firstEvenEleIndex", firstEvenEleIndex);

let arr = [
  {
    name: "niranjan",
    age: 26,
  },
  {
    name: "tanya",
    age: 21,
  },
  {
    name: "robin",
    age: 20,
  },
  {
    name: "nobita",
    age: 20,
  },
  {
    name: "nobita",
    age: 22,
  },
];

const userWithAge20Index = arr.findIndex((ele) => ele.age == 20);
console.log("userWithAge20Index: ", userWithAge20Index);




