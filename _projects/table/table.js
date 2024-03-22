// create a table conatining list of users
// create some inputs fields for user information and a save button
// provide delete and edit option
// also make table scrollable 
// pagination
// filter and search

// let user1 = {
//     name: "rohit",
//     age: 24,
//     id: 321,
//     salary: 15000
// }



let totalUsers = [ 
{
   name: "rohit",
   age: 24,
   id: 321,
   salary: 15000
}, 
{
   name: "rakesh",
   age: 26,
   id: 968,
   salary: 15000
},
{
   name: "ruhi",
   age: 21,
   id: 755,
   salary: 12000
},
// {
//     name: "rohit",
//     age: 24,
//     id: 321,
//     salary: 15000
//  }, 
//  {
//     name: "rakesh",
//     age: 26,
//     id: 968,
//     salary: 15000
//  },
//  {
//     name: "ruhi",
//     age: 21,
//     id: 755,
//     salary: 12000
//  }
]

// const allTr = 
// `<tr>
//     <td>rohit</td>
//     <td>321</td>
//     <td>24</td>
//     <td>15000</td>
// </tr>
// +
// <tr>
//     <td>rakesh</td>
//     <td>968</td>
//     <td>26</td>
//     <td>15000</td>
// </tr>
// +
// <tr>
//     <td>rohit</td>
//     <td>21</td>
//     <td>755</td>
//     <td>12000</td>
// </tr>
// `

let totalUserRows = '';
for(let i=0;i<totalUsers.length;i++){
  let user = totalUsers[i];
  
  let userRow = 
  `<tr>
    <td>${user.name}</td>
    <td>${user.id}</td>
    <td>${user.age}</td>
    <td>${user.salary}</td>
 </tr>`
 console.log('userRow: ', i, userRow);


 totalUserRows += userRow
 console.log('totalUserRows: ', totalUserRows);
}

let tbody = document.querySelector('.tbody');

tbody.innerHTML = totalUserRows











// let arr = [4,7,9,2,65]

// arr[0]
