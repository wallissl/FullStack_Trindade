/* Utilizando a lista: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']

Através de lógica de programação, adicione um ou mais nomes na lista, porém não é possível receber um nome igual.

Regra 1: É necessário enviar um ou mais nomes;

Regra 2: Caso um ou mais nomes já exista na lista retorne uma mensagem de erro;

Regra 3: Se entre os nomes enviados, receber um valor diferente de uma string, retornar uma mensagem de erro;

Regra 4: Caso se enquadre, nas primeiras 3 regras, retornar um log da nova lista com os nomes adicionados junto aos anteriores */

let lista1 = ['Pedro','José','Aderbal','Danilo','Luisa','Vitoria'];

let novoNome=[];

let menu=0;
do{
menu = parseInt(prompt('Deseja incluir um nome na lista?\n1 - Sim\n2 - Não'));

switch(menu){
    case 1:
        novoNome = prompt('digite um nome');
        if(!lista1.includes(novoNome) && isNaN(novoNome)){
            lista1.push(novoNome);
        }else if(!isNaN(novoNome)){
            alert(`${novoNome} é um valor númerico, digite um nome!`)
        }        
        else{
            alert('Nome já existe na lista!')
        } break;
        case 2:
            console.log('Até a próxima')
        break;
        default:
            alert('Opção inválida');
}}while(menu !=2)

console.log(lista1);

