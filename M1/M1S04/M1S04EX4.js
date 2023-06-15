// Agora o banco inventou de criar um novo tipo de poupança, chamada poupancaPremium, que contém uma taxa de juros melhor. Crie uma classe que herde atributos e métodos da classe poupanca criada anteriormente e modifique o método atualizaJuros (polimorfismo), aumentando o a taxa para 1.2% toda a vez que o método for chamado.

class Conta {
    #saldo;
    #senha;
    

    constructor(){
        this.#senha = 1234;
        this.#saldo = 20;
        this.acumulador =+ this.#saldo;
    }
    

    get meuSaldo(){
        return this.#saldo;
    }

    get minhaSenha() {
        return this.#senha;
    }

    deposito(valor){
        let valorDepositado = this.#saldo + valor;
        return valorDepositado;
    }
}

class ContaPoupanca extends Conta {
    constructor(senha,saldo,banco,acumulador){
        super(senha,saldo,acumulador)
        this.banco = 'Meu banco';
    }
    
    atualizarJuros(numero){
        numero = numero * 0.007;
        let juros = this.meuSaldo * numero + this.meuSaldo;
        
        
        return(console.log(juros))
        
    }    
    
}

class poupancaPremium extends ContaPoupanca{

    constructor(saldo){
        super(saldo);
    }

    atualizarJuros(){
        console.log(this.meuSaldo)
    }

}

let teste = new ContaPoupanca;

teste.atualizarJuros(1);

let teste2 = new poupancaPremium;

teste2.atualizarJuros();
