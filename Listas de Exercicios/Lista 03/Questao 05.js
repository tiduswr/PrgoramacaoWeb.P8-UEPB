const TESTE_ARRAY = ["aster", "zeca", "edu", "blaster", "dadin"];

const ehString = e => {
    return (typeof e === 'string');
}

const colocarTodasAsPalavrasEmMaiusculo = async (palavrasArr) => {
    return palavrasArr.map(palavra => {

        if(!ehString(palavra)){
            throw new Error('Somente String são aceitas no array!');
        }
        return palavra.toUpperCase();

    })
}

const ordenarArrayDePalavras = async (palavrasArr) => {
    palavrasArr.forEach( e => {
        if(!ehString(e)){
            throw new Error('Somente String são aceitas no array!');
        }
    });

    return palavrasArr.sort();
}

const palavrasMaiusculasOrdenadas = async (palavrasArr) => {
    try{
        const arrMaiusculo = await colocarTodasAsPalavrasEmMaiusculo(palavrasArr);
        const arrOrdenado = await ordenarArrayDePalavras(arrMaiusculo);
        console.log(arrOrdenado);
    }catch(error){
        console.log(`Erro na execucao: ${error.message}`);
    }
}

palavrasMaiusculasOrdenadas(TESTE_ARRAY);