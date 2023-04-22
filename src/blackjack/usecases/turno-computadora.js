import { pedirCarta, valorCarta, crearCarta } from "./";

/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas 
 * @param {array<string>} deck
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {
    if(!puntosMinimos){
        throw new Error('Puntos mínimos son necesarios');
    }

    if(!puntosHTML){
        throw new Error('Los puntosHTML son necesarios');
    }

    if(!deck){
        throw new Error('El deck es necesario');
    }

    let puntosComputadora = 0;

    do {
        const {carta, deck_temporal} = pedirCarta(deck);
        deck = deck_temporal;

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        //crear carta
        const imgCarta = crearCarta(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}