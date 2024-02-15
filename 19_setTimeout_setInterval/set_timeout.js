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



function sayMessage () {
    alert("hello")
}

