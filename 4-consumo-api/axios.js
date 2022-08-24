var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://rickandmortyapi.com/api/location',
    headers:{}
};

axios(config)
    .then(function (response){
        console.log(response.data);
    })
    .catch(function (error){
        console.error(error);
    })