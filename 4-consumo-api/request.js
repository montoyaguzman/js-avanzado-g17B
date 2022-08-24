var request = require('request');

/* Creating an object with the method, url, and headers. */
var options = {
    'method': 'get',
    'url': 'https://rickandmortyapi.com/api/location',
    'headers':{}
}

/* This is a callback function. It is a function that is called after another function has finished
executing. */
request(options, function(error, response){
    if (error) throw new Error(error);
    console.log(response.body)
})