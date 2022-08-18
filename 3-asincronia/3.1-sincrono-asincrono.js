/**
 * BLOQUE 1 - Código sincrono
 * Una linea se ejecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */
console.log('============== BLOQUE 1 ==============');
console.log('Primero'); 
console.log('Segundo');
console.log('Tercero');

/**
 * BLOQUE 2 - Problema tipico de asincronia
 * 
 */
const validatingPayment = () => {
    setTimeout(() => {
        console.log('2 Validar la tarjeta de credito/debito y mostrar un loader');
    }, 0);
}

console.log('1 Presionar el boton comprar');
validatingPayment();
console.log('3 Ver el mensaje de gracias por su compra joven');