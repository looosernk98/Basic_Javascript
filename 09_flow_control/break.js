/*

break statement works only loops like for, while, do…while and not for map(), 
forEach(). They are essentially functions by nature which takes a callback and 
not loops.


*/

// let i = 0;

for(let i =0; i<10; i++){
    // console.log(i);
    if(i == 7){
        break;
    }
    console.log(i);
}

