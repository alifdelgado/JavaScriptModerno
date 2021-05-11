import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
const heroeId = 'capi';
const heroeId2 = 'spider2';

// buscarHeroe(heroeId, (err, heroe) => {
//     if(err) { return console.error(err); }
//     buscarHeroe(heroeId2, (err, heroe2) => {
//         if(err) { return console.error(err); }
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision`);
//     });
// });


// buscarHeroe(heroeId).then(heroe => {
//     // console.log(`Enviando a ${heroe.nombre} a la mision`);
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision`);
//     });
// });

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)]).then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
}).catch(err => {
    console.error(err);
    
});
