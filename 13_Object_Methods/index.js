
// object => property, methods 

const car = {
    name: "kia sonet",
    model: "HTX",
    price: 1600000,
    features:["sunroof", "climate control", "16 inch display", "semi-automatic"],
    
    // getter function
    printName:function(){
        console.log(this.name)
    },
    // getter function
    getFeatures:function(){
        return this.features
    },
    // getter function
    getPrice: () => {
        console.log(this)
        return this.price
    },
    // setter function
    changePrice: function(price){
        this.price = price
    }
}



// car.printName();
// console.log(car.getFeatures())
// console.log(car.getPrice())
// car.changePrice(18000000)
// console.log(car)

//================================ method overriding =============================

car.printName = function(){
    console.log('My car name is :', this.name);
}

car.printName();

car.printModel = function(){
    console.log('My car model is :', this.model);
}

// ============================================================================
const obj = {};
obj[1] = 'one';
// obj[name] = "abc" => will give reference error
obj["name"] = "abc"
obj[true] = 'boolean';
console.log(Object.keys(obj));
console.log(obj[1])


// ============================ checking existence of key in object =============================================
const obj2 = { a: 1, b: 2 };
console.log("a" in obj2);
console.log("c" in obj2);



//=============================
const obj = { x: 10, y: 20 };
const { x, y } = obj;
console.log(x, y);

//=================================================
const user1 = {
    name: "virat",
    age: 37,
    family:{
        son: "akaay",
        wife: "anushka",
        key:{
            a:10,
            b:12
        }
    }
}

const user2 = {
    ...user1,
    family:{
       ...user1.family,
       key:{
           ...user1.family.key,
           b: 19,
       }
    }
}