const miModulo = (() => {
    'use strict';
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];
    let puntosJugadores = [];
    const btnNuevo = document.querySelector('#btnNuevo'),
        btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHtml = document.querySelectorAll('small');

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for(let i=0;i<numJugadores;i++){
            puntosJugadores.push(0);
        }

        console.clear();
        puntosHtml.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    };
    const crearDeck = () => {
        deck = [];
        for(let i=2;i<11;i++) {
            for(let tipo of tipos) {
                deck.push(i + tipo);
            }
        }
    
        for(let tipo of tipos) {
            for(let esp of especiales) {
                deck.push(esp + tipo);
            }
        }
    
        return _.shuffle(deck);
    };
    
    const pedirCarta = () => {
        if(deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    };
    
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (!isNaN(valor)) ? valor * 1 : (valor==='A') ? 11 : 10;
    };

    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHtml[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    };

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if(puntosComputadora === puntosMinimos) {
                alert('Nadie gana :(');
            } else if(puntosMinimos>21) {
                alert('Gana la maquina');
            } else if(puntosComputadora>21){
                alert('Jugador Gana');
            }
        }, 250);
    };
    
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);
            if(puntosMinimos > 21){
                break;
            }
        } while((puntosComputadora < puntosMinimos) && (puntosComputadora <= 21));
        determinarGanador();
    };
    
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);
    
        if(puntosJugador > 21) {
            console.warn('Perdiste!!!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if(puntosJugador === 21) {
            console.warn('21 Ganaste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });
    
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });
    
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };
})();