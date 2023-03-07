// Lista de tarefas

var tarefasDiarias = [
    "Estudar",
    "Trabalhar",
    "Exercícios",
    "Entreterimento",
    "Meditar"
]

let enviar = document.getElementById("enviar");

enviar.addEventListener('click', ativar);



// Função utilizada para buscar tarefa dentro de um array;

function buscar(){
    
    let buscarTarefa = document.getElementById('buscarTarefa').value;
    if(!buscarTarefa){
        return
    }

    let buscar = tarefasDiarias.find(tarefa => {
        return tarefa === buscarTarefa;
    }) 
    
    if(buscar){
    window.alert(buscar + " está na sua lista de tarefas.");
    }else {
        window.alert(` ${buscarTarefa} não está na sua lista de tarefas.`)
    }
    console.log(tarefasDiarias)
}

// Função utilizada para alterar Item dentro de um array;

function alterarItem(){
    let alterarItem = document.getElementById('alterarItem').value;
    if(alterarItem){
        for(i=0; i< tarefasDiarias.length; i++){
            if(tarefasDiarias[i] === alterarItem){
                var index = tarefasDiarias.indexOf(alterarItem);
                if(index !== -1){
                    var novaTarefa = prompt('Informe o nome da nova tarefa:');
                    tarefasDiarias[index] = novaTarefa;
                }    
                window.alert(`${alterarItem} foi substituido por ${novaTarefa}`)
                console.log(tarefasDiarias)        
            }
        }    
    }
}

// Remover itens de um array

function removeItem(){
    let deletarItem = document.getElementById('deletarItem').value;
    if(deletarItem){
        for(i=0; i< tarefasDiarias.length; i++){
            if(tarefasDiarias[i] === deletarItem){
                tarefasDiarias.splice([i],1);
                window.alert(`${deletarItem} foi removido das suas tarefas`)
                console.log(tarefasDiarias)
            }
        }    
    }
}


// Adicionar itens a um Array


function adicionarItem(){
    let adicionarItem = document.getElementById('adicionarItem').value;
        if(adicionarItem){
            
            //Laço for não funcionou
           /*  for(i= 0 ; i< tarefasDiarias.length; i++){

                if(tarefasDiarias[i] != adicionarItem){
                    tarefasDiarias.push(adicionarItem);
                    break;
                }                                                      
            } 

                console.log(tarefasDiarias)
          */

            // ForEach para conseguir percorrer a array e verificar o condicional se o item já existe ou não na lista

            var buscar = tarefasDiarias.find(tarefa => {
                return tarefa == adicionarItem
            })

            if (!buscar) {
            tarefasDiarias.push(adicionarItem)  
            window.alert(`${adicionarItem} adicionado a lista de tarefas`)
            }else{
                window.alert(`${adicionarItem} já consta na lista de tarefas`)
            }
            console.log(tarefasDiarias);
        }
}     

// Função para resetar o formulário;
/*   function apagaforms(){
    document.getElementById('forms').reset;
   
}   */


// Função utilizada para ativar 
function ativar(){
    buscar();
    alterarItem();
    removeItem();
    adicionarItem();
    apagaforms();
}

