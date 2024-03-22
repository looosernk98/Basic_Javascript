const user = {
  name: "harry",
  age: 23,
  state: "delhi",
  pin: 110086,
};

const ulList = `
    <div>
    <ul>
        <li>${user.name}</li>
        <li>${user.age}</li>
        <li>${user.state}</li>
        <li>${user.pin}</li>
    </ul>
    </div>
`;
const olList = `
    <div>
    <ol>
        <li>${user.name}</li>
        <li>${user.age}</li>
        <li>${user.state}</li>
        <li>${user.pin}</li>
    </ol>
    </div>
`;

const head = `
    <h1>
      my name is niru
    </h1>
`;

let main = head + ulList + olList;

const arr = ['apple', 'mango', 'papaya', 'fruit']

{/* <div>apple<div/> */}

let str = ''

for(let i = 0; i<arr.length; i++){
    str = str + `<h2> ${arr[i]} <h2/> `
}

let div = document.createElement('div');
div.innerHTML = str;



let body = document.querySelector("body");

body.innerHTML = main;

body.appendChild(div)
