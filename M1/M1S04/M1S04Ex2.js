/* O seu Manoel gostou do último aplicativo e agora quer inovar.

Ele quer que você construa a aplicação utilizando orientação a objetos.

1. Construa uma classe chamada CaixaRegistradora

2. Defina um atributo que armazene vários produtos no estoque contendo os seguintes campos:[{codigoBarra:number;preco:number;nome:string;}]

3. Defina um método no qual o seu Manoel consiga adicionar novos produtos no estoque. Esse método recebe os mesmos campos do produto, e todos eles são obrigatórios.

4. Defina um método que inicie o atendimento ao cliente, você deve passar o nome do cliente para iniciar.

5. Defina um método que receba codigoBarra: number; e quantidade: number; para o seu Manoel conseguir adicionar itens na caixa registradora. **Importante: A aplicação só poderá adicionar itens na caixa, se o código de barra dele existir.

6. Defina um método que você consiga verificar o valor total da conta do cliente.

7. Defina um método fecharConta, no qual você passa o dinheiro e ele calcula o troco e zera a caixa registradora. */

class CaixaRegistradora {
    constructor(codigoBarra, preco, nome){
        
        this.codigoBarra = codigoBarra;
        this.preco = preco;
        this.nome = nome;
        
    }
}

const caixa = new CaixaRegistradora();

var armazenarNomes = [];


while(nomeUsuario != 0){
var nomeUsuario = prompt('Digite um nome');
armazenarNomes.push(nomeUsuario)

caixa.nome = caixa.nome + armazenarNomes;
}

console.log(caixa.nome)