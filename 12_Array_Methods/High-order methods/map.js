/*

  The map() method calls a callback function on every element of an array and returns
  a new array that contains the results.

  The map() method does not change the original array, it creates a new array 
   of all elements that have been transformed by the callback function.

  The map() method calls a callback function on every element of an array and returns
   a new array that contains the results.


    _______ syntax _________

   function callback(currentElement,index,array){
  // ... 
}

*/

let array = [2,8,9,5,8,7,4]

let add2InAllItemOfArr = array.map((element)=> element+2 )

console.log(add2InAllItemOfArr)


// ___________ Optional parameters __________

