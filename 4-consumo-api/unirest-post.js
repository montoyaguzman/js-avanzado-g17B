var unirest = require('unirest')

var req = unirest('POST','https://ecume.herokuapp.com/apiECUME/userRegister')
    .headers({
        'Content-Type': 'application/json'
    })
    .send(JSON.stringify({
        "names": "Fulanito",
        "surnames": "Detal",
        "password": "contraseña",
        "email": "correo@correo.com",
        "phone": "5527270412",
        "height": 1.7,
        "weight": 70,
        "yearBirth": 190,
        "gender": "Male",
        "bloodPresure": "90/100",
        "answer1": "0",
        "answer2": "0",
        "answer3": "1",
        "answer4": "1",
        "answer5": "1",
        "answer6": "1",
        "answer7": "1",
        "activityLevel": "1",
        "noActivity": "1",
        "nowActivity": "1",
        "highActivity": "1",
        "diabetes": "1",
        "hypertension": "1",
        "heartDisease": "1",
        "kidneyDisease": "1",
        "respiratoryDisease": "1",
        "jointDisease": "1",
        "allergies": "1",
        "hyperthyroidism": "1",
        "hypothyroidism": "1",
        "otherDisease": "1",
        "surgicalInterventions": "1",
        "fractures": "1",
        "hospitalization": "1",
        "bath": "1",
        "toothBrushing": "1",
        "sharedRoom": "1",
        "tobaccoConsumption": "1",
        "alcoholConsumption": "1",
        "numberOfMeals": "1",
        "physicalActivity": "1"
    }))
    .end(function (res){
        if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
    })