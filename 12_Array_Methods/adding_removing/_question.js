// Mimic the functionality of array remove/add methods

// User defined Pop Method
let arr = [1,2,3,4,5,6,7,8,9]

function pop(arr){
    let removedLastItem = arr[arr.length - 1];
    let newArr = [];
    for(let i =0; i< arr.length; i++){
        if(i < arr.length - 1) newArr.push(arr[i])
    }

    return { removedItem: removedLastItem, newArr }
}

const { removedItem, newArr }= pop(arr); // arr.pop()
console.log('removedItem, newArr: ', removedItem, newArr);
// console.log('original arr: ', arr);


// PUSH, SHIFT,  UNSHIFT






