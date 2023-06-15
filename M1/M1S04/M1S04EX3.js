/* Agora o banco quer criar uma nova classe chamada ContaPoupança. A conta poupança tem todos os métodos e atributos da classe Conta (herança). Porém, essa nova classe deve ter um novo método chamado atualizaJuros. Esse método deve pegar o valor do saldo e adicionar um ganho baseado em um índice de índice de 0.7% todas as vezes que for chamado. */

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
    
    async atualizarJuros(numero){
        numero = numero * 0.007;
        let juros = await this.meuSaldo * numero + this.meuSaldo;
        
        
       return(console.log(juros))
        
    }    
    
} 

let teste = new ContaPoupanca;

/* 
// Outra forma:

let deseja = ''
let boraSomar = 0
while(deseja!='n'){
        
    deseja = prompt ("Deseja continuar somando?(Digite 's' para sim ou 'n' para não)");
    if(deseja != 'n'){
        boraSomar++;
    }
}

teste.atualizarJuros(boraSomar); */

teste.atualizarJuros(1);
teste.atualizarJuros(2); 
