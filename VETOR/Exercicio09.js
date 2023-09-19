let idades = []
let maiorI = 0
let idade1 = []
let menorI = idade1[0]

idade = Number(prompt("Insira a quantidade de idades que você deseja: ou insira 0 para sair da aplicação:"));

  for(let i = 0; i<=idade; i++){
    idade1[i]=Number(prompt(`Insira a idade da ${i+1}° pessoa:`));
    

    if(maiorI < idade1[i]){
    maiorI = idade1[i]
}else if(idade1[i] < menorI  ) {
    menorI = idade1[i]
}
}
document.write(`Menor idade : ${menorI}`)
document.write(`Maior idade : ${maiorI}`);

