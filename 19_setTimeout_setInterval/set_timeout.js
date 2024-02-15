/*

The setTimeout() method calls a function after a number of milliseconds.

1 second = 1000 milliseconds.

The setTimeout() is executed only once.
If you need repeated executions, use setInterval() instead.
Use the clearTimeout() method to prevent the function from starting.
To clear a timeout, use the id returned from setTimeout()

// ____________ Syntax _____________________

(1) setTimeout(function, milliseconds, param1, param2, ...)
Then you can to stop the execution by calling clearTimeout():
(2) clearTimeout(myTimeout);


*/

let timerId1 = ''
let timerId2 = ''

function sayMessage (timer) {
    alert(`hello from ${timer}`)
}
function firstTimeout(time){
   timerId1 = setTimeout(sayMessage, time, 'timer1')
   console.log('timerId1: ', timerId1);
}
function secondTimeout(time){
   timerId2 = setTimeout(sayMessage, time, 'timer2')
}

function stopFirstTimeout(){
    console.log('timerid 1', timerId1);
    clearTimeout(timerId1)
}

function stopSecondTimeout(){
    console.log('timerid 2', timerId2);

    clearTimeout(timerId2)
}
// 1000ms = 1 sec

// console.log("Before setTimeout")

// setTimeout(() => {
//    console.log("hello")
// }, 5000)

// console.log("After setTimeout")

