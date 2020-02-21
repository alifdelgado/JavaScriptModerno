function saludar(nombre){
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1,2,3,4,5];
    /** Esto nunca se va a ejecutar  */
    console.log('Soy un código que está después del return');
}

const saludar2 = function(){
    console.log('Hola Mundo');
};

const saludarFlecha = () => {
    console.log('Hola Flecha');
};

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
};

const retornoDeSaludar = saludar('Mundo', 40, true, 'Costa Rica');
// console.log({retornoDeSaludar});
// saludar2();
// saludarFlecha();
// saludarFlecha2('Fernando');

function sumar(a,b){
    return a + b;
}

// const sumar2 = (a,b)=>{
//     return a + b;
// };

const sumar2 = (a,b) => a + b;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

// console.log(sumar(1,2));
// console.log(sumar2(1,2));
// console.log(getAleatorio());
console.log(getAleatorio2());