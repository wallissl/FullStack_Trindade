/* Use uma sintaxe que chama uma função em intervalos de tempo definidos e faça ela verificar se chegou uma data, se essa data chegou, ela deve imprimir feliz aniversário. Se não chegou, ela deve dizer quantos dias faltam para chegar a data.
Para facilitar o cálculo de dias, pode se basear no algorítimo abaixo.

const d1  = '2021-10-05';
const d2    = '2021-11-12';
const diffInMs   = new Date(d2) - new Date(d1)
const diffInDays = diffInMs / (1000  60  60 * 24);

console.log(diffInDays) // 38 */


setInterval(()=> {
//const d1  = '2021-10-05';
const d2    = '2023-04-28';
const diffInMs   = new Date(d2) - new Date()
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

if(diffInMs>0){
    console.log(`faltam ${diffInDays} dias`)
}else {
    console.log(`Feliz Aniversário`)
}
},3000) // Schedule utilizado para executar funções em determinados horários.