/**
 * Esta función me permite tomar una carta
 * @param {array<string>} deck Ejemplo ['A1','A2','A3']
 * @returns {string,array<string>} retorna la carta y el nuevo deck
 */
export const pedirCarta = (deck) => {
    let deck_temporal = deck;
    if ( deck_temporal.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck_temporal.pop();
    return {carta, deck_temporal};
}