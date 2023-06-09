/**
 * Esta función retorna el valor de la carta que se utilizará en la suma del puntaje
 * @param {string} carta 
 * @returns {number} valor de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}