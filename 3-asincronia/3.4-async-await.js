console.log('============== BLOQUE 5 ==============');
/**
 * BLOQUE 5 - Async await (ES8 - 2017)
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

async function main() {
    console.log('1 Presionar el boton comprar');
    try {
        const response = await validatingPaymentPromise();
        console.log('3 Ver el mensaje de gracias por su compra joven', response);
        console.log('4 Entregaremos en N fecha');
    } catch(error) {
        console.log('error: ', error);
    }
    console.log('============== FINAL');
}

main();
