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

// let promise = new Promise(function (resolve, reject) {
//   // do something
// });

/*

The Promise() constructor takes a function as an argument. The function also 
accepts two functions resolve() and reject().

If the promise returns successfully, the resolve() function is called. And, 
if an error occurs, the reject() function is called.


*/

// API

const flag = true;

const fullfillHandler = (value) => {
    console.log('value: ', value);
}

const rejectedHandler = (err) => {
    console.log('err: ', err);
}

const promiseCreator = function(value){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if(value > 10){
            resolve(`resolved by value ${value}`)
           }else{
             reject(`rejected by value ${value}`)
           }
        }, 3000)
    })
}

const asyncTask1 = promiseCreator(20) // return promise object with state pending initially
console.log('asyncTask1: ', asyncTask1);



asyncTask1
.then(fullfillHandler)
.catch(rejectedHandler)


// ************************* Promise Chaining  ************************

/*
 
if any time we came across any error , No task will performed after that, it will
go directly in catch handler.

Chaining is a simple concept by which we may initialize another promise inside 
our .then() method and accordingly we may execute our results. The function 
inside then captures the value returned by the previous promise 


*/

function job(state) {
    return new Promise(function(resolve, reject) {
      if (state) {
        resolve('success');
      } else {
        reject('error');
      }
    });
  }
  
  let promise = job(false);

  promise.then(function() {
    console.log('Success 1');
    return 10;
  }).then(function(value) {
    console.log('value: ', value);
    console.log('Success 2');
    throw new Error('Error from then 2nd')
  }).then(() => {
    console.log('Success 3');
  })
  .catch(function(err) {
    console.log('Error: ', err);
  });

  











