const fs = require('fs');

const path = './';
// Regresar ../
// Ahi mismo ./
const nameFile = 'my-file.txt';
const contentForFile = 'Esto lo escribi desde node';
// Path absoluto: /Users/montoyitag/tech/cursos/devf/4-js-avanzado/js-avanzado-g17B/1-node/1.2-crear-archivo
// Path Relativo: 1-node/1.2-crear-archivo
// const filePath = path + '/' + nameFile;
const filePath = `${path}/${nameFile}`;
fs.writeFile(filePath, contentForFile, (err) => {
    if(err) {
        throw err;
    } else {
        console.log('archivo creado con exito...!!');
    }
});
