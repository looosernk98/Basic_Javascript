
/*
 splice() method that allows you to insert new elements into 
 the middle of an array. Also, you can use this method to delete 
 and replace existing elements as well.

*/

const arr = [10, 20, 30, 40];

// arguments -> 
//  1st argument -> index at which operation perform 
//  2nd argument -> no. of items to be deleted
//  3rd argument and so on -> items to be added
const deletedItems = arr.splice(1,2,-1, 3, 6)
console.log('deletedItems: ', deletedItems);
console.log('actual arr', arr);

/* 
  Note : The splice() method changes the original array and returns an array 
  that contains the deleted elements
*/