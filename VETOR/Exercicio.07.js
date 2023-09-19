let vetor1, vetor2
const vetor11 = []
const vetor22 = []
const vetor33 = []

for(let i = 1; i<10;i++){
  vetor1 = Number(prompt(`Insira o primeiro número ${i} do vetor 01`));
  vetor11.push(vetor1);
}
for(let i = 1; i<10;i++){
    vetor2 = Number(prompt(`Insira o primeiro número ${i} do vetor 02`));
    vetor22.push(vetor2);
  }

debugger
  for(let i = 0; i <vetor11.length; i++){
    document.write("Números na ordem que você digitou para o vetor 01: ")
    document.write(vetor11[i]+"<br>")
    document.write(`----------------------------<br>`)
}
for(let i = 0; i <vetor22.length; i++){
    document.write("Números na ordem que você digitou para o vetor 02: ")
    document.write(vetor22[i]+"<br>")
    document.write(`----------------------------<br>`)
}
for(let i = 1; i<10; i++){
  if(vetor11.length != 0 ){
   vetor33.push(vetor11.shift())
  } if(vetor22.length != 0){
   vetor33.push(vetor22.shift())
  }
}
document.write("Intercarlação do vetor 1 e vetor 2: ")
document.write(`<br>----------------------------<br>`)
document.write(vetor33)