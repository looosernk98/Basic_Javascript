console.log(parseInt('a123') == Number("123z")) // false
console.log('Number("123z"): ', Number("123z"));// NaN
console.log(parseInt('a123')); // NaN
console.log(NaN == NaN); // false

console.log(typeof "10"/5 + typeof NaN); // NaNnumber
console.log('"10"/5: ', "10"/5); // 2
console.log(isNaN("10"/5)); // false
console.log(typeof (50 + +"100px") === "number" ? "orange": "apple");
console.log('typeof (50 + +"100px"): ', typeof (50 + +"100px"));
console.log('(50 + +"100px"): ', (50 + +"100px"));

console.log(typeof 3+ +"2")