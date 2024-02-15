/*

The setInterval() method calls a function at specified intervals (in milliseconds).

The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

1 second = 1000 milliseconds.

*/



// function start(){
//     setInterval(() => {
//         console.log('Hello');
//      }, 3000)
// }

let h1Ele = document.querySelector('h1')

let sec = 0;
h1Ele.innerHTML = sec

const timerid = setInterval(() => {
    if(sec == 10){
        clearInterval(timerid)
        return;
    }
     sec++;
     h1Ele.innerHTML = sec
}, 1000);



