
// let arr = [1, 2, 10, 3, 78, -10, -1]
// Q1. find sum of elements in array

// Q2. find the list of negative numbers

// Q3. find some of all positive even numbers

//Q4. print all negative numbers except -1

//Q6. print elemets of array

//Q6. print elemets of array in reverse order



// __________ QUESTION 1 ________________
// Q1. find sum of elements in array

let arr = [1, 2, 10, 3, 78, -10, -1]

let sum = 0

for(let i=0;i<arr.length;i++){
    let item = arr[i]
    sum += item
}
console.log("sum =",sum)


// __________ QUESTION 2 ________________
// Q2. find the list of negative numbers

let Arr = [1, 2, 10, 3, 78, -10, -1]
let negetiveEle = []

for(let i=0;i<Arr.length;i++){
    let currEle = Arr[i]
    if(currEle < 0){
        negetiveEle.push(currEle)
    }
}

console.log(negetiveEle)

// __________ QUESTION 3 ________________
// Q3. find some of all positive even numbers

let arr1 = [1, 2, 10, 3, 78, -10, -1]

let totalOfEvenNo = 0

for(let i=0;i<arr1.length;i++){
    let num = arr1[i]
    if(num > 0 && num % 2 == 0){
     totalOfEvenNo = totalOfEvenNo + num
    }
}

console.log(totalOfEvenNo)

// __________ QUESTION 4 ________________
//Q4. print all negative numbers except -1

let arr2 = [1, 2, 10, 3, 78, -10, -1]

for(let i=0;i<arr2.length;i++){
    let num = arr2[i]
    if(num<0 && num != -1){
    //    console.log(num)
    }
}

// __________ QUESTION 5 ________________
//Q5. print elemets of array
let arr3 = [1, 2, 10, 3, 78, -10, -1]

for(let i=0;i<arr3.length;i++){
    let num = arr3[i]
    console.log(num)
}



// __________ QUESTION 6 ________________
//Q6. print elemets of array in reverse order
let arr4 = [1, 2, 10, 3, 78, -10, -1]

for(let i=arr4.length-1; i>=0; i--){
    let num = arr4[i]
    console.log(num)  
}
  
