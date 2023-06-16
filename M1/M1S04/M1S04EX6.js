// O seu Manoel agora quer mais uma inovação, ele quer poder guardar itens no estoque e quando alguém fizer alguma compra, ele automaticamente seja removido do estoque. Para isso você pode colocar um novo item em cada objeto chamado quantidade. Para salvar os dados, você pode utilizar localStorage.

class Estoque {
    constructor(){        
    }

    adicionarStock(produto, quantidade){
        const estoque = localStorage.getItem(produto);
        
        const novaQuantidade = estoque ? parseInt(estoque) + quantidade : quantidade; // Aqui é possivel atribuir o número de itens quantidade no estoque e associar esse número ao produto.
        //console.log(estoque)
        localStorage.setItem(produto,novaQuantidade); // Atualizando produto e quantidade.
    }

    comprar(produto, quantidade) {
        const estoque = localStorage.getItem(produto); // Pegar produto

        if (estoque) {
            const estoqueAtual = estoque;
            //console.log(estoque)
            if (estoqueAtual >= quantidade){
                const novoEstoque = estoqueAtual - quantidade;
                localStorage.setItem(produto, novoEstoque);
                console.log(`${quantidade} unidades de ${produto} compradas`);
            }else {
                console.log(`Estoque insuficiente para ${quantidade} unidades de ${produto}`);
            }
        }else{
            console.log(`${produto} não encontrado no estoque`)
        }
    }

    verStock() {        
            
        console.log('\nTotal de produtos no Estoque:')
        for( let i =0; i< localStorage.length; i++){
            const produtos = localStorage.key(i);
            const quantidade = localStorage.getItem(produtos);
            console.log(`${produtos}: ${quantidade}`);
        }
    }
    limparStock(){
        localStorage.clear();
    }
}

const estoque = new Estoque();
estoque.adicionarStock('Maça',18);
estoque.adicionarStock('Pêra',10);
estoque.verStock();
estoque.comprar('Maça',10);
estoque.comprar('Pêra',5) 
estoque.verStock();
//estoque.limparStock();