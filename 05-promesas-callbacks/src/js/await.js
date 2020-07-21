import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);

export const obtenerHeroesArr = async () => {
    return await Promise.all(heroesIds.map(buscarHeroe));
};

export const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch(err) {
        console.log('CATCH!!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }
};

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(console.log);
    for await(const heroes of heroesPromesas) {
        console.log(heroes);
    }
    console.timeEnd('HeroesCiclo');
};

export const heroesIfAwait = async(id) => {
    if((await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Ironman');
    } else {
        console.log('No');
    }
};