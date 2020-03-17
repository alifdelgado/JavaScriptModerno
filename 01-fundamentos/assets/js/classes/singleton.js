class Singleton {
    static instancia;
    nombre = '';
    constructor(nombre = ''){
        const a = undefined;
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');
console.log(`Nombre en la instancia es: ${instancia.nombre}`);
console.log(`Nombre en la instancia es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia es: ${instancia3.nombre}`);