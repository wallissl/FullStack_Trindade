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
    constructor(){
        
        this.estoque = [];
        this.total = 0;
    }

    // Método
    adicionarProduto(codigoBarra, preco, nome){
        const produto = {
            codigoBarra,
            preco,
            nome,
        };

        this.estoque.push(produto); // Adicionar itens para dentro do meu atributo (array) estoque.
        console.log(`Produto: ${nome}, adicionado ao estoque.`)
    }

    iniciarAtendimento(nomeCliente){
        console.log(`Atendimento iniciado para o cliente: ${nomeCliente}`)
    } 

    adicionarItem(codigoBarra, quantidade){
        const produto = this.estoque.find(
            (item) => item.codigoBarra === codigoBarra
        );
        if (produto){
            this.total += produto.preco * quantidade;
            console.log( `Adicionado ${quantidade} unidades do produto ${produto.nome} à conta.`);

        }else {
            console.log(`O código de barras ${codigoBarra} não foi encontrado no estoque.`)
        }
    }

    verificarTotalConta() {
        console.log(`Total da conta do cliente: R$ ${this.total.toFixed(2)}`);
    }

    pagaConta(dinheiro){
        const troco = dinheiro - this.total;
        console.log(`Total da conta: R$ ${this.total.toFixed(2)}`);
        console.log(`Dinheiro fornecido pelo cliente: R$ ${dinheiro.toFixed(2)}`);
        console.log(`Troco: R$ ${troco.toFixed(2)}`);
        this.estoque =[];
        this.total = 0;
        console.log('Conta fechada e caixa registradora zerada.');
    }
}

// Teste para chamar variáveis que serão inseridas dentro do meu método adicionar produto se necessário.
var v1 = 1234;
var v2 = 7.00;
var v3 = "Teste";

// Declarando um objeto a partir de uma classe.
let caixa = new CaixaRegistradora();
caixa.adicionarProduto(v1, v2, v3);
caixa.adicionarProduto(123, 5.99, "Final Fantasy X");
const nomeCliente = prompt("Digite o nome do cliente:");
caixa.iniciarAtendimento(nomeCliente);
caixa.adicionarItem(123,3);
caixa.verificarTotalConta();
caixa.pagaConta(50);
console.log(caixa.estoque)
