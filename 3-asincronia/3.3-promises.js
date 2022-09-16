console.log('============== BLOQUE 4 ==============');
/**
 * BLOQUE 4 - Promises (pending, reject, resolve)
 */

const validatingPaymentPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 Validar la tarjeta de credito/debito y mostrar un loader');
            const statusArray = [ 200, 500 ];
            const randomStatus = statusArray[Math.floor(Math.random() * statusArray.length)];
            if(randomStatus === 200) {
                resolve('todo gucci!');
            } else if (randomStatus === 500) {
                reject('tu tarjeta fue declinada :c');
            }
        }, 0);
    });
};

console.log('1 Presionar el boton comprar');
validatingPaymentPromise()
    .then(response => {
        console.log('3 Ver el mensaje de gracias por su compra joven', response);
        // more sentences code
    }).then(() => console.log('4 Entregaremos en N fecha') )
    .catch(error => console.log('error: ', error))
    .finally(() => console.log('============== FINAL'))

