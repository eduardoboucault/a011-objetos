const pokemon1 = {  //* OBJETO BASE PARA O EXERCÍCIO, NOME DO OBJETO pokemon1 COM 3 PROPRIEDADES E 3 VALORES DIFERENTES
	nome: 'Bulbasaur',
	tipo: 'Grama',
	nivel: 5
}

//? A)

const pokemon2 = {  //* EXERCICIO PEDE PARA CRIAR UMA CÓPIA DO OBJETO BASE E ALTERAR AS PROPRIEDADES NOME E TIPO
    ...pokemon1
}

pokemon2.nome = 'Squirtle'

pokemon2.tipo = 'Água'

// console.log('Pokemon 1:',pokemon1,'\nPokemon 2:',pokemon2)

//? B)

pokemon1.ataques = []  //*EXERCICIO PEDE PARA CRIAR UMA ARRAY VAZIA E UTILIZAR A ESTRUTURA DO OBJETO EXEMPLO CITADA NO ENUNCIADO PARA ADICIONÁ-LO A ARRAY CRIADO COM O COMANDO .push()

const objeto = {
    nome: 'Investida' ,
    dano: 40 ,
    tipo: 'Normal' ,
    precisao: 100
}

pokemon1.ataques.push(objeto)  //* <--- ADIÇÃO DE ELEMENTO OBJETO A UMA ARRAY VAZIA E NOVA ARRAY SENDO ADICIONADA COMO NOVA PROPRIEDADE DO OBJETO ORIGINAL

// console.log('Pokemon 1:', pokemon1 , '\nPokemon 2:' , pokemon2)

//? C)

//* COM A NOVA PROPRIEDADE ADICIONADA AO OBJETO ORIGINAL, O EXERCICIO PEDE PARA COPIAR A PROPRIEDADE E ADICIONAR NO SEGUNDO OBJETO

pokemon2.ataques = [...pokemon1.ataques]

//? ^copia  ^propriedade nova será atribuido ^mesmo valor de propriedade do objeto original

// console.log('Pokemon 1:', pokemon1 , '\nPokemon 2:' , pokemon2)

//? D)

//* ADICIONAR NOVO OBJETO PARA PROPRIEDADE ARRAY CRIADA COM NOVOS VALORES ESPECÍFICOS

pokemon1.ataques[1] = {
    nome: 'Folha Navalha',
    dano: 45 ,
    tipo: 'Grama' , 
    precisao: 100
}

//? E)

//* ADICIONAR NOVO OBJETO PARA PROPRIEDADE ARRAY CRIADA COM NOVOS VALORES ESPECÍFICOS

//* COMO FOI CRIADO A PRIMEIRA PROPRIEDADE ATAQUES E O OBJETO SENDO O PRIMEIRO ITEM DA ARRAY VAZIA, PARA ADICIONAR OUTRO ATAQUE É NECESSÁRIO INDICAR UM NOVO ÍNDICE PARA ADICIONAR UM NOVO ELEMENTO

pokemon2.ataques[1] = {
    nome: 'Jato de Água',
    dano: 40 ,
    tipo: 'Água' , 
    precisao: 100
}

//? F)

console.log('Pokemon 1:', pokemon1 , '\nPokemon 2:' , pokemon2)