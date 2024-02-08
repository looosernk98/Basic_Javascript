
// syntax
// paramters
// return
// actual array modification
// example - varaible names

/*
  find() returns the value of the first element that passes a test.

 find() method executes a function for each array element.

 find() method returns undefined if no elements are found.

 find() method does not execute the function for empty elements.

 find() method does not change the original array.


  __________ Syntax ______________

array.find(function(currentValue, index, arr),thisValue)

 => callback
The callback is a function that executes each element of the array.
 It takes three arguments:

 (1) element = is the current element.
 (2) index = the index of the current element.
 (3) array = the array that the find() was called upon.
 (4)  array  	Optional.    The array of the current element.
 (5) thisValue	Optional.   Default undefined.
*/

let array = [4,8,9,5,3]

let findFirstEle = array.find((element)=>element % 3 == 0)

console.log(findFirstEle)
