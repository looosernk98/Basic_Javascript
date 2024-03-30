// create a table conatining list of users
// create some inputs fields for user information and a save button
// provide delete and edit option
// also make table scrollable 
// pagination
// filter and search


/*

const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getData () {
   let fetchData = await fetch(API_URL,{
        method: "Get",
        headers:{
         "content-type": "application/json",
        },
   })
   let data = await fetchData.json()
   // console.log(data)

   let totalUserRows = '';

   for(let i=0;i<data.length;i++){
     let user = data[i];
     
     let userRow = 
     `<tr>
       <td>${user.id}</td>
       <td>${user.username}</td>
       <td>${user.email}</td>
       <td>${user.address.city}</td>
       <td>${user.phone}</td>
       <td>${user.company.name}</td>
    </tr>`
   //  console.log('userRow: ', i, userRow);
   
   
    totalUserRows += userRow
   //  console.log('totalUserRows: ', totalUserRows);

   }
   let tableData = document.querySelector(".tbody")
   
   tableData.innerHTML = totalUserRows
   
} 
getData()

*/

let tableBody = document.querySelector(".tbody")

tableBody.innerHTML = '<h2>Loading ...</h2>'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

let promise = fetch (API_URL,{
          method: "GET",
          headers:{
            "content-type": "application/json",
          }
})

promise.then((response)=>{
     return  response.json()
})

.then((data)=>{
   let length = data.length; // 10
   let start = length + 1;  // 11
   let end = length*10;  // 100
  
  let totalData = [...data];
   for(let i = start; i<=end; i++){
     let idealIndexForExistingData = (i-1)%10;
     totalData.push({...data[idealIndexForExistingData], id: i,});
   }

    let totalUserRows = ''
    for(let i=0; i<totalData.length;i++){
      let user = totalData[i]
      let userRow = 
      ` <tr>
          <td>${user?.id}</td>
          <td>${user?.username}</td>
          <td>${user?.email}</td>
          <td>${user?.address.city}</td>
          <td>${user?.phone}</td>
          <td>${user?.company.name}</td>
       </tr>
      `
      // console.log(userRow)
      totalUserRows += userRow
    }

    tableBody.innerHTML = totalUserRows
})

promise.catch((error)=>{
    console.log(error)
})