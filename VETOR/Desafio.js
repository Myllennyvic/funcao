let numeros, numeros1
const num = []

numeros = Number(prompt("Insira a quantidade de números que você deseja ordenar:"));

for(let i = 0; i<numeros; i++){
   numeros1 = Number(prompt(`insira o ${i+1}° número`));
   num.push(numeros1)
}

for(let i = 0; i<num.length - 1; i++){
    for(let b = 0; b<num.length - i - 1; b++){
        if(num[i] > num[b+1]){
    const tempo = num[b];
    num[b] = num[b+1]
    num[b+1] = tempo
        }
    }
}
document.write(`Números em ordem crescente: ${num}`);

for(let i = 0; i<num.length - 1; i++){
   for(let b = 0; b<num.length - i - 1; b++){
    if(num[i] < num[b+1]){
    const tempo = num[b];
    num[b] = num[b+1]
    num[b+1] = tempo
    }
    
   }
}
document.write(`Números em ordem descrescente: ${num}`);