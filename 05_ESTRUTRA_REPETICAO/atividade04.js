let numero, somaPar, triploImpar

numero = Number(prompt("Digite um número:"));

//validação
while(numero === 0 || isNaN(numero)){
 numero = Number(prompt("Digite um número:"));
if(numero === 0 || isNaN(numero)){
confirm(`Digite um valor com um número válido!`)
continue   
}}

//lógica

if(numero%2===0){
 somaPar = numero + numero
 alert(`Seu número ${numero} é par e soma é ${somaPar}`)
} else if (numero%2===1){
triploImpar = numero+numero+numero
alert(`Seu número é ímpar ${numero} e seu triplo é ${triploImpar}`)
 }

