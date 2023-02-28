


let tarefasDiarias = [
    "Estudar",
    "Trabalhar",
    "Exercícios",
    "Entreterimento",
    "Meditar"
]

let enviar = document.getElementById("enviar");

enviar.addEventListener('click', buscar);

function buscar(){
    let buscarTarefa = document.getElementById('buscarTarefa').value;
    
    let buscar = tarefasDiarias.find(tarefa => {
        return tarefa === buscarTarefa;
    }) 
    if(buscar){
    window.alert(buscar);
    }else {
        window.alert("Não encontrado")
    }
}





/* tarefasDiarias.forEach(tarefas => {
    console.log(tarefas);
}); */