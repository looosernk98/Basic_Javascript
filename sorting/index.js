/*

 Sorting is ordering/arranging of elements in a particular order. 
 Order can be ascending or descending

  Arrays.sort() :

  -> The sort() method sorts the elements of an array.
  -> The sort() method sorts the elements as strings in alphabetical and ascending order.
  -> The sort() method overwrites the original array.
  -> Sort() methods is a case sensitive

*/

// Inbuilt methods

const fruits = ['papaya', 'apple', 'mango', 'peach', 'raspberries', 'rambutan']

fruits.sort()
console.log('sorted fruits in ascending order: ', fruits); // ascending order

// use reverse to sort in descending order
fruits.sort().reverse()
console.log('sorted fruits in descending order: ', fruits); // descending order

const actors = ["Sanjay Dutt", 'akshay kumar', 'katrina', 'Salman khan']
// 
actors.sort() // ascending order with case sensitive example
console.log('actors: ', actors);

const numbers = [25, 100, 1, -2, 30, 29]
// sort methods compare numbers by converting them in string first
// numbers.sort().reverse()
// console.log('numbers: ', numbers);

/* 
 writing compare function itself to sort in desending order
 compare function : A function that defines a sort order

 The function should return a negative, zero, or positive value, depending on the arguments:
 function(a, b){return a-b}

 */
 function compareFn(a, b){
    return b - a; // descending
    // return a - b // ascending
 }
numbers.sort(compareFn)
console.log('numbers in descending: ', numbers);

function example(a) {
   console.log(a); // Output ?
   var a = 20;
   console.log(a); // Output ?
   function a() {}
   console.log(a); // Output ?
}

example(10);








