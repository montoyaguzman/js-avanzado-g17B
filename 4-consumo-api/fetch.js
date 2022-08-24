const fetch = require('cross-fetch')

fetch('https://rickandmortyapi.com/api/character/?name=rick&status=dead&species=human')
    .then((response)=>{
        return response.json()
    }).then((resp)=>{
        console.log(resp)
    })