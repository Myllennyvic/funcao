let resposta = []
let gabarito = []
let  nota = 0, n = 0, aprovacao = 0, taxa, total =0

alert(`Corriga suas provas!!`);

for(let i = 1; i<=3; i++){
gabarito[n] = prompt(`Insira o gabarito da ${i} questão:`);
}

for(let i = 1; i<=3; i++){
    total = total + 1
    nota = 0
    for(let b = 1; b<=3; b++){
       resposta[n]= prompt(`Insira a resposta da ${b}º questão do aluno ${i}`);
       if(gabarito[n] === resposta[n]){
       nota = nota + 1
       } 
       
    }
    document.write(` Nota do aluno ${i} ${nota}<br>`)
    debugger
    if(nota >=1){
       aprovacao = aprovacao+ 1
       }
    
}
taxa = (aprovacao*100) / total
document.write(`Taxa de aprovação: ${taxa}`)