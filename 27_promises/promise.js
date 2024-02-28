/*

In JavaScript, a promise is a good way to handle asynchronous operations. It is 
used to find out if the asynchronous operation is successfully completed or not.

A promise may have one of three states.
1. Pending
2. Fulfilled
3. Rejected

A promise starts in a pending state. That means the process is not complete. If 
the operation is successful, the process ends in a fulfilled state. And, if an 
error occurs, the process ends in a rejected state.

For example, when you request data from the server by using a promise, it will 
be in a pending state. When the data arrives successfully, it will be in a 
fulfilled state. If an error occurs, then it will be in a rejected state.


*/

// To create a promise object, we use the Promise() constructor.

let promise = new Promise(function(resolve, reject){
   // do something
});

/*

The Promise() constructor takes a function as an argument. The function also 
accepts two functions resolve() and reject().

If the promise returns successfully, the resolve() function is called. And, 
if an error occurs, the reject() function is called.




*/

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

/*

Promises are useful when you have to handle more than one asynchronous task, 
one after another. For that, we use promise chaining.

*/


// returns a promise

let countValuePromise = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  
  countValuePromise.then(function successValue(result) {
      console.log(result);
    })
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });







    // returns a promise
let countValuePromiseReject = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 
 console.log(countValuePromiseReject);
 // executes when promise is resolved successfully
 countValuePromiseReject.then(
     function successValue(result) {
         console.log(result);
     },
  )
 
 // executes if there is an error
 .catch(
     function errorValue(result) {
         console.log(result);
     }
 );