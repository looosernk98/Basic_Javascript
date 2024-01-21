

/*
  Recursion is a process of calling itself. 
  A function that calls itself is called a recursive function

  A recursive function must have a condition to stop calling itself. Otherwise,
  the function is called indefinitely.

  Once the condition is met, the function stops calling itself. 
  This is called a base condition.

*/

// syntax
// function recurse() {
//     if(condition) {
//         recurse();
//     }
//     else {
//         // stop calling recurse()
//     }
// }

// recurse();

// for(i = 1; i<=10; i++){
//     console.log(i);
// }

function printNumber(num){
    if(num > 5) return;
    console.log(num);
    printNumber(num+1);
    console.log(num);
}
printNumber(1)