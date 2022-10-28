/* Una función sin parámetros que devuelva siempre "true" */
function isTrue() {
    return true;
}

console.log(isTrue);
/* Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado */
const delay = time => new Promise(resolveCallback => setTimeout(resolveCallback, time));

delay(5000)
    .then(() => console.log("Hola soy una promesa"))
    .catch(() => console.log("Error en el retardo"))

/* Una función generadora de índices pares automáticos */
function* generateIndice() {
    let i = 0;
    while (true) {
        i+=2;
        yield i 
    }
}



const generate = generateIndice();

console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());