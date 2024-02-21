
const obj = {
    fullname: "virat kohli",
    age: 37,
    state: 'delhi',
    wife: 'anushka shrama',
    couple_name: 'virushka'
}

// console.log('obj.fullname ', obj.fullname);

// const key = 'wife'
// console.log('obj[fullname] ', obj[key]);

// how to iterate over on object

// using Object.keys() method
const keys = Object.keys(obj) // ['fullname', 'age', 'state', 'wife', 'couple_name']
// console.log('keys: ', keys);

// obj.fullname
// key = 'fullname'
// key = 'age', 'state'
// obj[key] - > obj['fullname']


for(let i = 0; i<keys.length; i++){
  const key = keys[i]
  console.log(key,'->', obj[key]);
}

// using Object.entries()