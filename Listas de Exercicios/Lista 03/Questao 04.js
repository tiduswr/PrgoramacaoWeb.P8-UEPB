const TESTE_ARRAY = ["aster", "zeca", "edu", "blaster", "dadin"];

const ehString = e => {
    return (typeof e === 'string');
}

const colocarTodasAsPalavrasEmMaiusculo = (palavrasArr) => {
    return new Promise((resolve, reject) => {

        const result = palavrasArr.map(palavra => {

            if(!ehString(palavra)){
                reject(new Error('Somente String são aceitas no array!'));
            }
            return palavra.toUpperCase();

        })
        
        resolve(result);
    });
}

const ordenarArrayDePalavras = (palavrasArr) => {
    return new Promise((resolve, reject) => {

        palavrasArr.forEach( e => {
            if(!ehString(e)){
                reject(new Error('Somente String são aceitas no array!'));
            }
        });

        resolve(palavrasArr.sort());

    });
}

colocarTodasAsPalavrasEmMaiusculo(TESTE_ARRAY)
    .then(arrMaiusculo => {
        return ordenarArrayDePalavras(arrMaiusculo)
    })
    .then(arrOrdenado => console.log(arrOrdenado))
    .catch(e => console.log(`Erro ao colocar as palavras em maiusculo: ${e.message}`));