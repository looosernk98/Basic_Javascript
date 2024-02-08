/*
 The filter() method creates a new array with all the elements that pass
  the test implemented by the callback() function.

  The filter() method does not change original array.

 Internally, the filter() method iterates over each element of the array and
  passes each element to the callback function. If the callback function
   returns true, it includes the element in the return array.

 The filter() method accepts two named arguments: a callback function and
  an optional object.

   _______ syntax _________

   function callback(currentElement,index,array){
  // ... 
}

*/

let array = [4,9,7,3,6,10,15,18,11]

let evenNo = array.filter((element)=>element%2==0)

console.log("eveno =",evenNo)

console.log("original array =",array)




// ___________ Optional parameters __________

