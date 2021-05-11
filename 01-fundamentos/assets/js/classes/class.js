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
    constructor(nombre, codigo, frase){
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

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
spiderman.miFrase();
spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
Persona._conteo = 2;
console.log(spiderman);
console.log('Conteo estatico: ', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();