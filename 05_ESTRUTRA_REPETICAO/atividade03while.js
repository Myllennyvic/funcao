let num
//VALIDAÇÃO
do{
    num = Number(prompt("Digite um número:"));
    if(num === 0 || isNaN(num)){
        alert(`Digite um valor com um número válido!`);
    }
}while(num === 0 || isNaN(num))

alert(`Os números pares 1 e ${num}`)
//LÓGICA
for(let i = 0 ; i<=num; i++){
    //document.write(`valor de i: ${i} e número digitado${num}`)
   if(i%2 === 0){
     document.write(`Os números pares ${i}`)
   }
} 



