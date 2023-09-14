///* Faça um programa que preencha um vetor com nove número inteiros, 
 //*  calcule e mostre os números primos e suas respectivas posições.

let vetor = [], primo, num  

for(let i = 1; i<10; i++){
vetor = Number(prompt("Insira um número:"));
}

for(let i = 1; i<vetor.length; i++){
  num = vetor[i]
  primo = 1 
} 

if(num <= 1){
   primo = 0
} else if (num === 2){
   primo = 1 
}else if(num % 2 === 0){
  primo = 0 
}else {
    for(let j = 2; j < num; j++){
      if(num % j === 0){
         primo = 0 
      }
    }
    if(primo){
     document.write(`Números primos na posição ${i} : ${num}`);
    }
}