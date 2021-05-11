let a = 5;

if(a>=10){
    console.log('a es mayor o igual a 10');
} else {
    console.log('a es menor a 10');
}

// console.log('fin de programa');

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

if(dia === 0){
    console.log('Domingo');
} else if(dia === 1) {
    console.log('Lunes');
    // if(dia===1){
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if(dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}

/** Sin usar If Else o Switch, unicamente objetos  */
dia = 6;
const diasLetras = {
    0: () => 'domingo - 0',
    1: () => 'lunes - 1',
    2: () => 'martes - 2',
    3: () => 'miercoles - 3',
    4: () => 'jueves - 4',
    5: () => 'viernes - 5',
    6: () => 'sabado - 6',
};

const diasLetras2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado',];
/** Día de la semana  */
console.log(diasLetras[dia]());
console.log(diasLetras2[dia]);