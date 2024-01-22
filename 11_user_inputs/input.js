
const a = Number(process.argv[2]) // parseInt
const b = Number(process.argv[3]);

function sum(a, b){
  return a + b;
}

let result = sum(a, b);
console.log('result: ', result);

// [ node, input.js, 10, 20]