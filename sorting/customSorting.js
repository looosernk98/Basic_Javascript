const users = [
    {
        name: "ajay",
        roll: 1,
    },
    {
        name: "zelensky",
        roll: 5,
    },
    {
        name: "vijay",
        roll: 2,
    },
    {
        name: "ravi",
        roll: 4,
    },
    {
        name: "surya",
        roll: 3,
    },
    {
        name: "robin",
        roll: 6,
    },
    
]

users.sort((a, b) => {
    // return a.roll - b.roll // ascending -> 0, +ve, -ve.
    return b.name.localeCompare(a.name)
})
console.log('users: ', users);

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  items.sort((a, b) => a.value - b.value);
  
  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        // nameA = "EDWARD"  nameB = " SHARPE"
      return -1; // -ve ->  [a, b]
    }
    if (nameA > nameB) {
        // nameA = "SHARPE" nameB = "AND"
      return 1; // +ve -> [b, a]
    }
  
    // names must be equal
    return 0;
  });
  