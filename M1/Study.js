

// Olá Mundo
console.log("Hello World");

// Criando um objeto e adicionando um objeto dentro dele
var meuObjeto = {
    nome:'Wallis',
    idade:30,
    endereco:"Rua Manoel Cardoso de Abreu",
    info : {

        olhos: 'castanhos',
        cor: 'azul'

    }
}

console.log(meuObjeto.info.cor);

// Criando um Array (lista)
var minhaLista = ['Wallis',30,'Manoel Cardoso de Abreu'];
console.log(minhaLista[1]);

// É possível misturar listas com objetos
var alunos = [{
    nome: 'Wallis',
    sala: 3,
    idade: 7
    }, {
        nome: 'Ana',
        sala: 2,
        idade: 5
    },{
        nome: 'Kami',
        sala: 1,
        idade: 2,
    }
];

console.log(alunos[2].nome);

console.log( `O endereço da sua rua é: ${minhaLista[2]}`);