
const printMyName = function(name = 'dhoni', age = 23){
  console.log('my name is ', name);
  console.log('my age is ', age);
}

printMyName('Niranjan')

const print = (a = 10, b = 20) => {
  console.log(a);
  console.log(b);
  console.log(a + b);
}
print(NaN, 20)
print(null, undefined)