const vetorGeral = []
const vetorP = []
const vetorN =[]
let vetor

for(let i = 0; i<8; i++){
   vetor=Number(prompt(`Insira o ${i+1}° número`));
   vetorGeral.push(vetor)
}

for(let i = 0; i <vetorGeral.length; i++){
    document.write("Números que você digitou : ")
    document.write(vetorGeral[i]+"<br>")
    document.write(`----------------------------<br>`)
}

for(let i = 0; i<vetorGeral.length; i++){
  if(vetorGeral[i] >= 0){
  vetorP.push(vetorGeral[i])
  }else if(vetorGeral[i] <= 0){
  vetorP.push(vetorGeral[i])
  }
}
  document.write(`Números positivos ${vetorP}`);
  document.write(`----------------------------<br>`)
  document.write(`Números negativos ${vetorN}`);
