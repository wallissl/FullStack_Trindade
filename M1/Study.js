// Módulo 01 - Semana 01 - Variáveis, operadores, estruturas relacionais e condicionais, function, GitHub, Scrum.

/*

console.log("Hello World"); // Mensagem simples para imprimir no console.

var meuObjeto = {
    nome:'Wallis',
    idade:30,
    endereco:"Rua Manoel Cardoso de Abreu",
    info : {

        olhos: 'castanhos',
        cor: 'azul'

    }
} // Criando um objeto e adicionando um objeto dentro dele.

console.log(meuObjeto.info.cor);

var minhaLista = ['Wallis',30,'Manoel Cardoso de Abreu'];
console.log(minhaLista[1]); // Criando um Array (lista)

// É possível misturar listas com objetos.
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



// Funções condicionais

let n1 = 19;
let n2 = 20;
if(n1 > n2){
    console.log('O número 1 é maior que o 2')
}else{
    console.log('O número 2 é maior que o 1')
} // If simples sobre estruturas condicionais

console.log(n1 > n2?  'o número 1 é maior que o 2' : 'O número 2 é maior que o 1') // Aqui foi utilizado o operador ternário, uma forma mais resumida de fazer um if e else.

let fruta = 'banana'

switch(fruta){
    case 'banana':
        console.log('Acertou');
    break;
    case 'maça':
        console.log('Maça é legal');
    break;
    default:
        console.log("Sem frutas no momento");    
} // Aqui temos uma estrutura switch case, utilizado para comprar condicionais com base e uma informação.



//Função void
numero1 = 30;
numero2 = 20;

function soma(){
    console.log(numero1 + numero2)
} // Aqui temos uma função sem retorno, void, é uma função sem retorno porque não retorna nada para o usuário além de uma informação, não tem uma interação direta com ele. Podemos utilizar esse tipo de função, por exemplo, em um site de compras quando o usuário clica em um botão e abre um leque de opções.

console.log(soma())

// Função com retorno

function soma(n1, n2){
var n1 = prompt('Digite o primeiro número');
var n2 = prompt('Digite o segundo número');
return alert(parseInt(n1)+parseInt(n2))
} // Aqui temos uma função que irá retornar um alert com a soma dos números que o usuário digitou, ou seja é uma função que precisará receber parâmetros.

soma();



//Módulo 01 - Semana 02 - Estrutura de repetição (for, while e do while), sobre escopo, uma variável pode ser global ou local, quando declaramos um var dentro de uma função a variável se torna de escopo local, já se fizermos o mesmo dentro de um if ele é global poís podemos utilizar em outras partes do código. Let tem escopo local onde for criada e const não pode ter seu valor alterado. - Eventos - Json & LocalStorage

// Estruturas de repetição

var contador = 5;

for(var i = 0; i <= contador; i++){
    console.log(i);
} // Modelo típico do laço for, utilizado para repetir uma ação até que uma condição seja verdadeira.

numerosDaSorte = [7,8,9];

for(var i=0; i<numerosDaSorte.length; i++){
    console.log('O número da sorte é: ' + numerosDaSorte[i]);
} // For utilizado para percorrer uma arrei até que uma condição seja verdadeira e imprimir os itens.

numerosDaSorte.forEach((numero)=>{
    console.log('Os números são:', numero);
}) // ForEach, muito utilizado para simplificar o laço for tradicional, você pode percorrer uma array sem a necessidade de especificar o índice.



// Exemplo de utilização do forEach para tirar uma média.
const numeros = [10,10,10,10];
let somaNumeros = 0;

numeros.forEach((numero)=>{
    somaNumeros = somaNumeros + numero;
});

const media = somaNumeros / numeros.length;
console.log(media);

var contador = 0;
while(contador <5){
    console.log('contador:', contador);
    contador++
} // Aqui temos o while, enquanto, serve para realizar uma determinada ação até que uma condição seja verdadeira.

meuNumero = 0;
do{
    console.log('Aqui tem um laço com do: ' + meuNumero);
    meuNumero++
    
}while(meuNumero <3) // Aqui temos um modelo utilizando o do while, que é executado ao menos uma vez antes de entrar na repetição.



// Eventos, podemos utilizar eventos para interagir com ações do usuario misturando o html com o javascript

let login = document.getElementById('nome'); // Comando simples para buscar o que está dentro do botão utilizando o ID
login.onclick = clicou; // onclick associado ao login para quando clicado chamar o comando clicou.
login.innerHTML = "Bem vindo"; // Comando simples para trocar o texto de um botão via JavaScript 

function clicou () {

    console.log('Você clicou')
} // função simples que foi chamada no html para realizar a ação do clicou.

// Aqui vamos utilizar o addEventListener para armazenar informações digitadas pelo usuário dentro de um campo e mostrar a informação para ele:

var user = {
    userName:"",
} // Uma objeto simples para armazenar informações

let botao = document.getElementById("botao"); // Variável onde irei armazenar o elemento do HTML botao
let texto = document.getElementById("texto"); // Variável onde irei armazenar a informação vinda do input.

botao.innerHTML = "Botão"; // inserir texto no botão

const handleChange = (e) =>{
    user.userName = e.target.value
} // usaramos uma ArrowFunction para inserir o valor digitado no handleChange (pode ser usado outro nome se tiver interesse) que irá transferir para o meu objeto.

botao.addEventListener('click',clicou); // Aqui o click é a ação que já tem o objetivo de escutar o click e a função que deve retornar.
texto.addEventListener('change', handleChange); // Aqui o change é a ação que já tem o objetivo de executar a troca e a função que deve retornar.

function clicou(){
    alert(`você digitou: ${user.userName}`);
} // Função para retornar algo para o usuário.

// Uma outra coisa interessante é que podemos utilizar uma função para interromper o funcionamento padrão de outras, por exemplo o usuário não digitou o nome em um campo de nome em um formulário, podemos utilizar: form.onsubmit = function(e){if(inputName.value === "){e.preventDefault();message.textContent = 'Preencha o nome';}}"



// Objetos - Json & LocalStorage - JSON É utilizado para converter objetos em texto Json e vice-versa | LocalStorage é utilizado para armazenamento de dados em formato de texto no navegador | Atraso e Intervalo - Instalação do NODE | ES6




// Revisão - Duas formas de acessar um objeto

var objeto = {
    a: 26,
    b: 33,
    c: 42
}
console.log(objeto.a); // Forma 1
console.log(objeto["b"]); // Forma 2


// Inserir um dado em um Array (Vetor)

var vetor = [];
vetor.push(7,3); // Comando Push para inserir valores em um array, podemos inserir mais de um utilizando a virgula
console.log(vetor[1])

var objeto = {}; // Alterando o valor de um objeto

objeto.num = 33;
objeto['num'] = 40;
console.log(objeto.num)


var vetor = [
    {a: 55, b:32 , c:42},
    {a: 60, b:50, c: 77}
] 

console.log(vetor[1].c) // Acessando índice e chave de um array
console.log(vetor[0]['c']) // Outra forma, acessando índice e chave de um array
var objeto = {
    a: [26, 32, 77],
    b: [55, 99, 70]
}

console.log(objeto.a[0]); // Acessando chave e índice de um array
console.log(objeto['b'][1]); // Outra forma, acessando chave e índice de um array




// JSON 
var carros = [
    {
        ano:1995,
        modelo: 'Escort'
    }
] // Declarando um array de objetos que será convertido

carrosJSON = JSON.stringify(carros); // Converter objeto para JSON

console.log(carrosJSON);

var carrosJSON = JSON.parse(carrosJSON); // Iniciando uma nova variável para converter o texto JSON para objeto

console.log(carrosJSON);

// LocalStorage - Podemos utilizar set.Item, getItem, removeItem, Clear

localStorage.setItem('foo', '13'); // Armazena item em localStorage

var bar = localStorage.getItem('foo'); // Recupera item de localStorage

console.log(bar);

var obj = {a: 'bah,', b:32};
localStorage.setItem('seven',JSON.stringify(obj)); // Podemos inserir um objeto convertido em JSON dentro do localStorage o 'seven' nesse caso seria o nome atribuido a ele.

var barObj = JSON.parse(
    localStorage.getItem('seven')
); // Podemos pegar um elemento que está como um JSON dentro do localStorage converter novamente para objeto e depois imprimir o valor na tela.

console.log(barObj.b);

// Atraso e Intervalo

function ola (){
    console.log('Hello World');
}



setTimeout(ola,3000); // Função utilizado para definir um atraso na execução de uma função, utiliza milissegundos e pode ser parado com a função clearTimeout(função set ou variável).

setInterval(ola, 3000); // Função utilizada para definir um tempo de intervalo entre execuções recorrentes de uma função, pode ser cancelada com a função clearInterval(função set ou variável).




// Arrow Functions  -  São funções anônimas, não precisam de um nome para serem invocadas, não utiliza a palavra function e as vezes nem return, tudo está implícito - Sua sintaxe básica é: () => {} | É possível utilizar uma arrow function

let imp = () => console.log('teste');

imp();



// Set - Comando utilizados para você poder inserir uma informação, deletar, consultar ou limpar

const numeros = [1,2,3,4,4,5,5,5,6,6,7,8,9,9,9]
let conjunto = new Set(numeros)
conjunto.add(10); // Adicionar informação
conjunto.delete(9); // Remover informação
console.log(conjunto.has(11)); // Verifica se uma informação existe dentro do set
conjunto.clear(); // Limpar todo o Set

console.log(conjunto)





// SEMANA 03 - Funções de Array - Módulos - Assíncrono - JavaScript é Single thread: único fio, única linha, executa um comando por vez. - Função Sincrona retorna o resultado assim que o navegador puder, já a função assíncrona é retirada do fluxo normal de execução do JavaScript e aguarda a resolução da "Promise" para ser executada. Trabalhamos com uma pilha de execução e uma fila de callbacks - Pilha - Last In, First Out, último que entra é o primeiro que sai --- Fila - First In, First Out - Primeiro que entra é o primeiro que sai. Essas funções são chamadas de callback também. ---- Promises, Async / Await, Fetch





let copa22 = ['Brasil','Argentina','Itália','USA'];
copa22.push("França"); // Push é utilizado para adicionar itens no final de um array
copa22.unshift('Alemanha') // unshift é utilizado para adicionar itens no início de um array
copa22.splice(3,0,'Equador') // Utilizado para indicar em qual posição você deseja adicionar uma informação em um array, se deseja excluir algo após a inserção e o dado que deve ser inserido.


 copa22.forEach((e) => {
    console.log(e)
}) // Laço para verificar o exercício


for(i=0; i<copa22.length; i++){
    console.log(copa22[i])
}



// Inserindo informações de um array em uma lista HTMl 
let copa22 = ['Brasil','Argentina','Itália','USA'];
let list = document.getElementById('list');

copa22.push('França'); // inserir uma nova informação na lista

copa22.forEach((time) => {
    let li = document.createElement("li"); // Criar um li dentro do html
    li.innerText = time // Inserir a informação do meu array dentro do li
    list.appendChild(li) // inserir no html a informação do li
});

console.log(copa22);



let numerosPares = [2,4,6,8,10];

/* for(i=0; i<numerosPares.length;i++){
    console.log(numerosPares[i]);
}
 */
/* numerosPares.forEach((e)=> console.log(e)) // ForEach é utilizado para percorrer um array sem retornar nenhum valor. 

let numerosParesMap = numerosPares.map((e)=>{
    return e*2;
}) // Map é importante e muito utilizado porque ele retorna os valores e com isso você pode alterar os valores de um array e armazenar em outra variável

console.log(numerosParesMap);

let numerosMenoresQueCinco = numerosPares.filter(e => {
    return e < 6;
}); // Filter é utilizado para filtramos números que são menores que a condição especificada.

console.log(numerosMenoresQueCinco);

// every - Testar um array
let valoresMenoresQueDez = (currentValeu) => currentValeu <=10; // Forma de atribuir uma variável com valor booleano.

console.log(numerosPares.every(valoresMenoresQueDez)); // Função para verificar se o Array é tem todas as condições previstas na variável definida ou não.



// Procurar em um array

let pessoas = [{
    nome:'Wallis',
    idade:31},
    {
    nome:'Kami',
    idade: 2},
    {
        nome:'Popo',
        idade:1,
        raca:'chato'
    }
]; // Array de objetos com informação

let procurar = pessoas.find(procurar => {
    return procurar.nome == "Kami";
}) // Função para procurar uma informação e retornar um dado caso encontre

console.log(procurar);


let testeReduce = [20,20,20,20,20];

let boraReduce = testeReduce.reduce((total, quantidade) => total + quantidade);

console.log(boraReduce); // Reduce simples utilizado para somar os números dentro de um array.

let numeros = [ 10,7,5,2];

let soma = numeros.reduce((total, quantidade, indice, array) => {
    total += quantidade;
    if(indice == array.length-1){
        return total/array.length
    }else {
        return  total;
    }
})
console.log(soma) // Aqui foi utilizado o reduce para poder realizar a soma do total e depois fazer uma validação para trazer a média, podemos colocar os parametros indice e array dentro do nosso reduce.



// Módulos - Trabalhamos com módulos para poder importar e exportar arquivos

import {nome,imprime} from "./modulos.js"; // Utilizado para podermos importar um módulo criado e seus itens, é necessário acrescentar o type="module" no HTML
import {meusItens}  from "./modulos.js";
console.log(nome)
imprime();

for( var i=0; i<meusItens.length; i++){
    console.log(meusItens[i])
}

import ola from "./modulos.js";
console.log(ola) // Usando o método Default apenas uma vez para fazer uma importação.

import * as nomePadrão from "./modulos.js"; // É possível utilizar o * para chamar todas as variáveis e outros dados, armazenar em outra variável a chamar os itens como se fosse de dentro de um objeto.

console.log(nomePadrão.meusItens);



setTimeout(() => window.alert("Bem vindo!"),3000) // Aqui utilizaremos o setTimeout como uma função para adiar a execução de uma tarefa.



function digaOlaPara(quem) {
    console.log("Ola, " + quem + "!!");
}

setTimeout(() => digaOlaPara("Jhonatan"),0); // setTimeout, mesmo com o tempo zerado será mostrado após a informação que está em pilha ou seja a função digaOla.
digaOlaPara("Michael");

// Podemos utilizar a setInterval também, que chama uma função por indefinida vezes dentro de um intervalo determinado.

//setInterval(()=>console.log(new Date().toLocaleString()),3000) // Exemplo da utilização do setInterval para mostrar a data e horário conforme a função de callback é executada.



// PROMISE é um objeto especial que representa uma eventual conclusão ou falha de uma operação que foi postergada (operação assíncrona).



new Promise ((resolve,reject) => {
    let deuCerto = true;

    if(deuCerto){
        resolve(console.log("A promessa deu certo"));
    }else{
        reject(console.log("A promessa deu errado"));
    }
}) // Nesta função utilizamos o resolve e o reject para trazer uma resposta ou outra caso a Promise tenha se efetivado ou não. Pode ter três estados diferentes pending (pendente), fulfilled (realizada), rejected(rejeitada)

// Para capturarmos o valor resultante da promise, usamos um método da própria promise chamado then. Este método recebe dois argumentos: onResolve e onReject.

const minhaPromise = () =>{
    return Promise.resolve("Resolve promise");
};

minhaPromise().then((resultado) => console.log(resultado)); // Para capturarmos o valor resultante da promise, usamos um método da própria promise chamado then. Para as promises resolvidas com erro, usamos outro método, o catch. -- Os erros são propagados pelo encadeamento até encontrar a primeira função que os capture (catch ou o onReject do then).


// As diretivas async e await sao funções assíncronas são simplificações de promises e tornam o código mais simples e fácil de ler e escrever. O modelo acima por exemplo pode ser simplificado.

async function minhaFuncaoAsync() {
    const resultado = await minhaPromise();
    console.log("Async:", resultado);
}

minhaFuncaoAsync(); // Importante: quando iniciamos a declaração de uma função utilizando a palavra-chave async, transformamos o retorno desta função em uma promise.

// FETCH - O método fetch é uma função do navegador utilizada para manipular requisições e respostas HTTP através de Promises. Quando criamos uma requisição HTTP com Fetch, recebemos como retorno uma Promise que será resolvida com um objeto Response. 

//O resultado do tipo Response que é devolvido por uma Promise do fetch possui um método .json() que converte a informação desejada (que vem em formato ReadableStream) em um objeto JavaScript:

//const result = fetch("./dados.json");
//result
//.then((data) => {
//  return data.json();
//})
//.then((res) => console.log(res)); // Exemplo

console.log('Executando uma promessa');
const somaDoisNumeros = (a,b) => {
    console.log('Executou');
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a + b == 4){
            resolve(a+b);
            }else{
                reject("A soma deu errado");
            }
        },3000);
    });
}
somaDoisNumeros(3,1).then((s) => console.log(s));
console.log('Executou uma promessa'); // Outro modelo de promessa com then


const somaPmim = (a,b) => {
    console.log("Bom dia!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 4000)
    })
} 

somaPmim(4,5).then((s)=>{console.log(s)}) // Mais um exemplo da utilização de uma função assíncrona com promise.

async function login(user,password){
    try {
        const verificador = await new Promise((resolve) =>{
            setTimeout(() => {
            if (user == 'Wallis'){
                resolve("usuario válido");
            }else{
                throw new Error('Usuario inválido');
            }
        },3000)
        });
        console.log(verificador)
    }catch (e){
        console.log(e)
    }
}

login('Walli','1234'); // Utilizando um async para poder verificar um usuário depois de realizar uma verificação dentro de uma função.



let variable = document.getElementById('root');

async function login(user,password){
    variable.innerText = 'Carregando..'
    try {
        const verificador = await new Promise((resolve) =>{
            setTimeout(() => {
            if (user == 'Wallis'){
                resolve("Bem vindo Wallis");
            }else{
                throw new Error('Usuario inválido');
            }
        },3000)
        });
        console.log(verificador)

        const verificaPassword = await new Promise((resolve)=>{
            setTimeout(() => {
                if(password == "1234"){
                    resolve("Senha correta");
                }else{
                    throw new Error('Senha incorreta')
                }
            },3000)
        });
        console.log(verificaPassword)
    }catch (e){
        console.log(e)
    } finally {
        console.log('login terminou')
        variable.innerText = `Bem vindo ${user}`
    }
}

login('Wallis','1234') 


async function buscaDados () {
    try {
        let dados = document.getElementById('root');
        const response = await fetch('https://api.github.com/users/wallissl');
        const body = await response.json()
        console.log(body)
        const dadosJSON = JSON.stringify(body.name) // Converter objeto para Json, você pode colocar o . e escolher o dado que deseja para filtrar
        dados.innerText = dadosJSON;
    } catch (e) {

    }finally{

    }
}

buscaDados() // Trazendo uma requisição do servidor do Git com async e await






// SEMANA 04 - CLASSES | ENCAPSULAMENTO | HERANÇA | POLIMORFISMO | ABSTRAÇÃO | MÉTODOS ESTÁTICOS


 class Roupa {
    constructor(cor,tamanho){
        this.cor = cor
        this.tamanho = tamanho
    } // Criação de propriedades

    seuTamanho() {
       return this.tamanho
    } // Criação de método
}

let roupaUm = new Roupa('azul','G'); // Sintaxe da criação de uma classe simples. 
console.log(roupaUm.seuTamanho()) // Aqui eu posso chamar um método que existe dentro da minha classe.




class Poligno {

    constructor (altura, largura){
        this.altura = altura;
        this.largura = largura
    }

    get area () {
        return this.#calcularArea ()
    } // Get utilizado para retornar o calcularArea

    set mudarLargura(num) {
        this.largura = num
    } // Set utilizado para alterar o valor de um dado dentro da minha classe

    #calcularArea () {
        return this.altura * this.largura
    } // Este método recebe um # isso indica que ele não pode ser acessado fora da classe, ou seja é privado.
}

let polignoUm = new Poligno(80,60);
polignoUm.mudarLargura=10;
console.log(polignoUm.area) // Isso se chama encapsulamento, onde podemos bloquear e proteger algumas partes do nosso código




// Trabalhando com atributos e métodos;

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        console.log('Ola mundo!'); // Método
    }
}

// let novaPessoa = new Pessoa('Wallis',31);

// console.log(novaPessoa.falar()); 

class Professor extends Pessoa {
    constructor(nome,idade,materia){
        super(nome,idade);
        this.materia = materia;
    }

    darAula(){
        console.log('Agora vamos dar aula de ' + this.materia)
    }
}

const wallis = new Professor('Wallis', 31,"Programação" )
console.log("Olá eu me chamo " + wallis.nome + ', eu tenho ' + wallis.idade + ' anos')
wallis.darAula();


// Polimorfismo - Quando um objeto se estende de outro objeto reescrevendo algumas características

class Atleta {
    peso; // Atributos
    categoria;
    constructor(peso){
        this.peso = peso; 
    } // Aqui temos o construtor que é necessário para referenciar o que será instanciado da classe

    definirCategoria(){
        if (this.peso <=50){
            this.categoria = 'Infantil';
        }else if (this.peso <= 65){
            this.categoria = 'Juvenil';
        }else{
            this.categoria = 'Adulto'
        }
    } // Instanciando um método
}

class Lutador extends Atleta{
    constructor(peso){
        super(peso);
    } // Instanciando uma nova classe herdando características de outra classe, Polimorfismo.
    definirCategoria(){
        if (this.peso <=50){
            this.categoria = 'Pluma';
        }else if (this.peso <= 65){
            this.categoria = 'Leve';
        }else{
            this.categoria = 'Pesado'
        }
    }
}

const joao = new Lutador(80)
joao.definirCategoria()
console.log(joao.peso + ' ' + joao.categoria)


// Abstração - Template ou identidade de uma classe que será construída no futuro, atributos e métodos podem ser criados na casse de abstração (superclasse). A implementação dos métodos e atributos só poderá ser feita na classe que irá herdar essa abstração

class Parafuso {
    constructor(){
        // this.nome = nome;
        if(this.constructor === Parafuso){
            throw new Error('Classe abstrata, não pode ser instanciada');
        }
    }
    get tipo() {
        throw new Error("Método abstrato, precisa ser implementado")
    }
}

class Fenda extends Parafuso{
    constructor() {
        super()
    }

    get tipo(){
        return 'Fenda'
    }
}

class Philips extends Parafuso{
    constructor(){
        super()
    }
    get tipo(){
        return 'Philips'
    }
}

class Allen extends Parafuso{
    constructor(){
        super()
    }
    get tipo(){
        return 'Allen'
    }
}

const allen = new Allen("Wallis")
console.log(allen.tipo);

// Métodos estáticos - Definido em uma classe usando a palavra-chave static, ele não pode ser acessado por qualquer um dos objetos instanciados da classe; Não pode ser acessado pelo objeto, apenas pela própria classe; O método estático só pode ser acessado usando o nome da classe porque ele pertence diretamenta à classe.

class Tipo {
    constructor (altura, largura){
        this.altura = altura
        this.largura = largura
    }
    static multiply (altura, largura){
        this.altura = altura
        this.largura = largura
        return this.altura * this.largura
    }
}

const mult = new Tipo;
console.log(Tipo.multiply(2,9));


class Homem {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
   static andar(){
        return 'Andando...'
    }
}


const pessoa = new Homem;
pessoa.andar();
console.log(pessoa.andar) 


console.log(Homem.andar())


*/


// SEMANA 05 - API E NODEJS / PACKAGE MANAGER / FRAMEWORKS (EXPRESS.JS E NEST.JS / ARQUIVOS ESTÁTICOS)


// AULA 01 - REVISÃO JAVASCRIPT


/* const carros = {
    "motor" : "V8",
    "Preço" : 'R$ 56.000,00'
}
delete carros.motor // Existe uma função chamada delete dentro do Javascript que é utilizada para apagar informações de dentro de um objeto.
console.log(carros) 

const carros = ["Uno","Argo"]

const existeCarro = carros.includes("Uno") // includes, utilizado para vefificar se existe um determinado dado dentro de um array | É possível utilizar também para procurar partes de palavras dentro de uma String.
console.log(existeCarro) 

// Expressão Regular ou Regex é utilizada para encontrar padrões em uma string

// for (let i = 1; i <5; i++) { if (i === 3) coninue; console.log(i); } | Essa expressão é utilizada para ignorar o 3 (nesse caso) utilizando o continue.

// .trim() é utilizado para remover espaços indesejados nas strings, ele tira exemplo o primeiro e o último espaço que vc colocou em um texto | Você também pode utilizar o replaceAll(" ",1) no caso da amostra o primeiro argumento é informando o que eu gostaria de substituir e o segundo é o pelo que. 

// Uma curiosidade, é possível acessar informações da chave de um objeto com outra chave (Chave dinâmica):

const magmar = {
    tipo: "fogo"
}

const pokemon = {
    nome: "Charmander",
    fogo: "Pokemon de Fogo"
}

console.log(pokemon[magmar["tipo"]]);

// mui.com utilizado para trabalhar com API no frontend
*/

// API e NODE | NPM é um gerenciador de pacotes do Node
// Comando para iniciar um projeto npm init -y (Esse comando gera um arquivo para o usuário - package.json - Serve para fazer o gerenciamento das bibliotecas)

/* {
    "name": "testenode", // Nome do projeto
    "version": "0.0.0", // da direita para esquerda o primeiro correçaõ de bug simples que vai subindo, o segundo número é referente a um bug urgente ou nova funcionalidade que estamos trabalhando (nesse caso sobe um número e zera o antecessor o primeiro é para grandes mudanças - exemplo uma refaturação para uma nova linguagem e zera os antecessores)
    "description": "", // Aqui vai a descrição
    "main": "index.js", // Aqui é o arquivo padrão principal, index é o padrão.
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1" // Aqui você pode inserir os comandos que serão executados, a palavra chave para rodar os script é: npm run test (nome do comando que estiver no script)
    },
    "keywords": [], // Palavras chave.
    "author": "", // Quem está fazendo o projeto, também é possível colocar uma String com várias pessoas.
    "license": "ISC" // O Node é open source, porém dependendo da aplicação você pode inserir uma licença.
  } 

// AULA 02 - RESOLUÇÃO DE EXERCÍCIOS - JAVASCRIPT

// 1 - Trocar posição de item na lista - Utilizando a lista: ["Pedro","José","Aderbal","Danilo","Luisa","Vitória"] - Troque as posições baseado nas regras abaixo: 
// 1 - Defina a posição inical e a posição final que quer trocar;
// 2 - Se for enviado uma posição que não existe na lista, retorne uma mensagem de erro;
// 3 - Caso seja possível a troca, utilize o console.log para exibir a lista reordenada.

function trocaPosicao(inicial,final){
    const lista = ["Pedro","José","Aderbal","Danilo","Luisa","Vitória"];

    const novaLista = [] // Lista vazia

    if(typeof inicial != 'number' || typeof final != 'number'){
        return console.log("Não é um número")
    } // Typeof é utilizado para verificar um tipo de variável

    for(let i=0; i < lista.length; i++){
        if(i === inicial){
            novaLista.push(lista[final]) // Inserir informação na nova lista.
            continue; // Utilizado para realizar o if e após isso avançar.
        }

        if(i === final){
            novaLista.push(lista[inicial])   
            continue;   
        }

        novaLista.push(lista[i]);            
    }
    console.log(novaLista)  
} 

trocaPosicao(5,0); 

// Outra forma 

const lista = ["Pedro","José","Aderbal","Danilo","Luisa","Vitória"];
const novaLista = [];

function trocaPosicao(inicial,final){
    if(inicial >= lista.length || final >= lista.length){
        console.log("Erro: posicao inválida na lista");
        return;
    }
    for(let i=0; i < lista.length; i++){
        if (i === inicial){
            novaLista.push(lista[final]);
        }else if (i === final){
            novaLista.push(lista[inicial])
        }else{
            novaLista.push(lista[i]);
        }
    }

    console.log(novaLista)
} 

trocaPosicao(3,8) */

// Mais uma forma

function trocaPosicao(inicial,final){
    const lista = ["Pedro","José","Aderbal","Danilo","Luisa","Vitória"];

    const novaLista = [] // Lista vazia

    if(typeof inicial != 'number' || typeof final != 'number'){
        return console.log("Não é um número")
    } // Typeof é utilizado para verificar um tipo de variável

    
    console.log(novaLista)  
} 


// S5A2 - 01:48 -- 12/06 S7A1