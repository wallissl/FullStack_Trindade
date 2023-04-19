// Arquivo de criação de módulos

// Utilizamos a palavra export para podermos exportar os módulos criados.
export let nome = "Wallis";

export function imprime(){
    console.log("Boa noite");
}

export let meusItens = ['Pc','Tv']

let ola = "ola";
export default ola; // Utilizamos o exporte default apenas uma vez para fazer uma exportação (Padrão do módulo). PS. A variável deve ser declarada fora do export

