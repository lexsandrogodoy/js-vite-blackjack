import _ from 'underscore';



/**
 * Esta función crea un nuevo deck
 * @param {array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    console.log(tiposDeCarta.length);
    /*if(!tiposDeCarta){
        throw new Error('tiposDeCarta es obligatorio');
    }*/

    /*if(tiposDeCarta.length === 0){
        throw new Error('debe tener un largo mayor a 0');
    }*/

    //Se pueden juntar ambas validaciones en una
    if(!tiposDeCarta || tiposDeCarta.length === 0){
        throw new Error('tiposDeCarta es obligatorio y debe tener un largo mayor a 0');
    }

    //Se pueden juntar ambas validaciones en una
    if(!tiposEspeciales || tiposEspeciales.length === 0){
        throw new Error('tiposEspeciales es obligatorio y debe tener un largo mayor a 0');
    }

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}


//para exportar por defecto
//export default crearDeck;
//para importar por defecto en la importacion se utiliza cualquier nombre