import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroesIfAwait } from './js/await';

heroesCiclo();
heroesIfAwait('iron');
// obtenerHeroesArr().then(console.table);

// obtenerHeroeAwait('capi2').then(console.log).catch(console.warn);

// import { buscarHeroe, buscarHeroeAsync } from './js/promesas';
// import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';

// buscarHeroe('capi').then(console.log).catch(console.warn);
// buscarHeroeAsync('iron2').then(console.log).catch(console.warn);

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log);