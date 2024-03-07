/*

Async/await is a feature in JavaScript that allows you to work with asynchronous
code in a more synchronous-like manner, making it easier to write and understand 
asynchronous code.

Async Functions always return a promise. Await Keyword is used only in Async 
Functions to wait for promise.
 
The await keyword makes the function pause the execution and wait for a resolved
promise before it continues:

Benefits of Using async Function:
-> The code is more readable than using a callback or a promise.
-> Error handling is simpler.
-> Debugging is easier.

*/

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



async function getData(){
    try {
        const result = await promiseCreator(10); 
        console.log('result: ', result);
    } catch (error) {
        console.log('error: ', error);
    }
}

getData();


