/* Crie uma classe chamada Person que receba atributos nome, idade e altura, e um método apresentar que imprima: 'Olá me chamo ${nome} tenho ${idade} anos e tenho ${altura} de altura'.
Crie uma classe que herde atributos e métodos da classe Person, adicione o método profissao, e reescreve o método apresentar para imprimir ‘Olá me chamo ${nome} tenho ${idade} anos e tenho ${altura} de altura e sou ${profissao}’.
 */

class Person {

    constructor(nome,idade, altura){
        this.nome = nome;
        this.idade = idade;
        this. altura = altura;
    }

    apresentar(){
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura.`);
    }
}

class Profissional extends Person {
    constructor(nome,idade,altura,profissao){
        super(nome,idade,altura);
        this.profissao = profissao;
    }

    apresentar(){
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao} `)
    }
}

let ap = new Person ('Wallis','31','1,65 m','oiio');

ap.apresentar();

let ap2 = new Profissional ('Wallis','31','1,65','Designer')

ap2.apresentar();


