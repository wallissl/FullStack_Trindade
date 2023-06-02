/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.
Crie uma classe chamada Conta; A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */

class Conta {

    #saldo;
    #senha;

    constructor(){
        this.#saldo = 10;
        this.#senha = 1234;
    } // Inserimos o # para informar que o atributo é privado.

    get meuSaldo (){
        return this.#saldo;
    } // Get serve para pegarmos uma informação de dentro de uma classe.

    get minhaSenha() {
        return this.#senha;
    } 

    deposito (valor) {
        const valorDepositado = this.#saldo + valor;
        return valorDepositado;

    }
}

let contaCorrente = new Conta;

const opUsuario = prompt(`Informe o que deseja:\n1 - Deposito \n2 - Retirada`);

switch(opUsuario){
    case '1':
        let p1 = prompt('informe a sua senha');
        if(p1==contaCorrente.minhaSenha){
            let s1 = prompt('Informe o valor que deseja depositar');
            console.log(`Deposito realizado com sucesso\nSeu novo saldo é de R$${contaCorrente.deposito(parseInt(s1))}`)
        }else{
            alert("Senha incorreta!")
        }
    break;
    case '2':
        let p2 = prompt('Informe a senha');
        if(p2 ==contaCorrente.minhaSenha){
            let v1 = prompt('Informe o valor que deseja retirar:');
            if(v1 < contaCorrente.meuSaldo){
                alert(`Saque realizado com sucesso\nSaldo atual da conta é: R$${contaCorrente.meuSaldo - v1}`)
            }else{
                alert("Saldo insuficiente!!!")
            }
        }else{
            alert("Senha incorreta")
        }

    break;
    default:
        console.log('Digite 1 ou 2')
}