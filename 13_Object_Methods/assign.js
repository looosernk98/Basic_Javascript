const car = {
    name: "kia sonet",
    model: "HTX",
    warranty: {
        start: "2021",
        end: "2025"
    }
}

const user={
    name: "peter",
    age: 26
}

const obj = Object.assign({a:10}, car, user);
console.log(obj)