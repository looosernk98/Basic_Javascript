const print = (a = 10, b = 20) => {
    console.log(a);
    console.log(b);
    console.log(a + b);
}
print(NaN, 20)
print(null, undefined)