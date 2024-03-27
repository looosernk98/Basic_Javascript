const axios = require('axios');
// import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1'

axios({
  method: 'get',
  url: API_URL,
  responseType: 'application/json'
})
.then((res) =>{
    console.log('res: ', res.data);
})
.catch((err) => {
    console.log('err: ', err);
})