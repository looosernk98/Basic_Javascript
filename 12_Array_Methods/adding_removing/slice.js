/*
   slice() method that allows you to extract subset elements of an array
   and add them to the new array.

   Note : The slice() returns a new array that contains the elements of the 
         original array. It’s important to keep in mind that the slice() method 
         performs the shallow copy of elements to the new array only.
         In addition, it doesn’t change the original array.
*/



const arr = [10, 20, 30, 40, 50, 60];

// 1st argument -> start index(inclusive), 2nd argument -> end index(exclusive)
const extractedItems = arr.slice(1, 3);
console.log('extractedItems: ', extractedItems);
console.log('original arr: ', arr);

// only start argument ->  removes all ele after start index

const result = arr.slice(4);  // by default -> end index will be arr.length
console.log('result: ', result);

// only end argument ->  removes all ele after start index
const result2 = arr.slice(undefined, 4);  // by default -> start index will 0
console.log('result2: ', result2);


