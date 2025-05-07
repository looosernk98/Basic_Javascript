const a =  process.argv[2] === 'N' ? process.argv[2]:  Number(process.argv[2]) // parseInt
const b = process.argv[3] === 'N' ? process.argv[3]: Number(process.argv[3]); // "7", '3'
const optr = process.argv[4]; // "+" , "-" , "*" ,"/"
console.log('inputs : ', a, b, optr);

function sum(a, b, optr){
  if(optr == "+"){
    return a + b;
  }else if(optr == "-"){
    return a - b;
  }else if(optr == "/"){
     return a / b;
  }else{
     return a * b;
  }
}
// N !== N -> false, N === N -> true
if(a !== 'N' && b !== 'N' && c !== 'N' ){
  let result = sum(a, b, optr);
  console.log('result: ', result);
}


// [ node, input.js, 10, 20]

// "[10,20,30,50]"
// const arr = "[10,20,30,50]";
const arr = process.argv[5]
console.log('arr: ', typeof arr, arr);
const actualArr = JSON.parse(arr); // array, object ""
console.log('actualArr: ', typeof actualArr, actualArr);

let prev_sum = 0;
for(let i = 0 ; i<actualArr.length; i++){
   let currEle = actualArr[i];
   prev_sum += currEle;
}
console.log('prev_sum: ', prev_sum);
