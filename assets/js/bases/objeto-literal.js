const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulk Buster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log({personaje});
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);
console.log('Coors: ', personaje.coords);
console.log('Lat: ', personaje.coords.lat);
console.log('No. trajes: ', personaje.trajes.length);
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('vivo: ', personaje[x]);
console.log('Ultima pelicula: ', personaje["ultima-pelicula"]);

/** Más detalles */
delete personaje.edad;
console.log({personaje});

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);

Object.freeze(personaje);

personaje.dinero = 10000000000;
console.log(personaje);
// delete personaje.direccion.ubicacion;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});