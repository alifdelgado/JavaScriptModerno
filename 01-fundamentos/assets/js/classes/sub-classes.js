class Persona {
    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos, soy un metodo magico');
    }

    comida = '';
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    set comidaFavorita(comida){
        this.comida = comida;
    }

    get comidaFavorita(){
        return this.comida;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

class Heroe extends Persona{
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
    }

    quienSoy(){
        super.quienSoy();
        console.log(`Soy ${this.nombre}, ${this.clan}`);
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
spiderman.quienSoy();