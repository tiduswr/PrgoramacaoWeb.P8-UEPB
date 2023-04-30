const pa = ({numTermos, primTermo, razao}) => {
    console.log("PA:")
    let soma = 0;
    let enesimoTermo = primTermo + (numTermos - 1) * razao;
    
    for(let i = primTermo; i <= enesimoTermo; i = i + razao) {
        soma += i;
      console.log(i);
    }
  
    console.log(`Soma: ${soma}\n`);
}

const pg = ({numTermos, primTermo, razao}) => {
    console.log("PG:")
    let soma = 0;
    let enesimoTermo = primTermo * (razao ** (numTermos - 1));

    for(let i = primTermo; i <= enesimoTermo; i = i * razao) {
        soma += i;
        console.log(i);
    }

    console.log(`Soma: ${soma}\n`);
}

const PA = {idFuncao: 1, nomeFunc: 'PA', numTermos: 5, primTermo: 2, razao: 3}
const PG = {idFuncao: 2, nomeFunc: 'PG', numTermos: 7, primTermo: 8, razao: 4}

pa(PA);
pg(PG);