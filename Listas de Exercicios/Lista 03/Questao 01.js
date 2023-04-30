/*
    Estava dando erro na minha maquina a função executaTeste
    pesquisei na net e era porque faltava esse import para a 
    função isEqual funcionar
*/
const _ = require('underscore');

/*
    Vamos passar por cada elemento aplicando a função callback recebida por parametro
    e armazenando o resultado em um novo array, no final returnamos esse array modificado
*/
function map(callback, array) {

    return array.reduce((res, item) => {
        res.push(callback(item));
        return res;}, []);

}

function executaTeste() {
    const array = [1, 2, 3, 4, 5];
    const arrayTriplicado = map((num) => num * 3, array);

    if (_.isEqual(arrayTriplicado, [3, 6, 9, 12, 15])) {
        console.log('✓ Passou no teste!')
    } else {
        console.error('O teste falhou :(')
        console.error('Resultado atual:');
        console.error(arrayTriplicado);
        console.error('Resultado esperado:');
        console.error([3, 6, 9, 12, 15]);
    }
}

executaTeste();