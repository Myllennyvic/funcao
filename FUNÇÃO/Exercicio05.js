//Faça um programa que preencha três vetores com cinco posições cada. 
//O primeiro vetor receberá os nomes de cinco funcionários; o segundo e o terceiro vetor receberão, respectivamente, 
//o salário e o tempo de serviço de cada um.
 //Mostre um primeiro relatório apenas com os nomes dos funcionários que não terão aumento; 
 //mostre o segundo relatório apenas com os nomes e novos salários dos funcionários que terão aumento. 
 //Sabe-se que os funcionários que terão direito ao aumento são aqueles que possuem tempo de serviço superior a cinco anos ou salário 
 //inferior a R$400,00. 
 //Sabe-se ainda que, se o funcionário satisfazer às duas condições anteriores, tempo de serviço e salário, 
 //o aumento será de 35%; para o funcionário que satisfazer apenas à condição tempo de serviço, 
 //o aumento será de 25%; para aquele que satisfazer apenas à condição salário, o aumento será de 15%

let nome = []
let salario1 = []
let tempoServico = []
let aumento15, aumento35

for(let i = 0; i<3; i++){
  nome[i] = prompt(`Insira o nome do ${i+1}º funcionário:`);
  tempoServico[i] = Number(prompt(`Insira o tempo de serviço do ${i+1} funcionário:`));
  salario1[i] = Number(prompt(`Insira o salário do ${i+1}º funcionário:`));
}

for(let i = 0; i<3; i++){
if(tempoServico[i] < 5 || salario1[i] > 400){
document.write(`Os funcionário que não tiveram aumento ${nome[i]}<br>`)
}
 if(salario1[i] < 400 || tempoServico[i] >5 ){
 if(salario1[i] < 400 && tempoServico[i] >5 ){
     salario1[i] = salario1[i]*1.35
   }else if(tempoServico[i] > 5){
    tempoServico[i] = tempoServico[i]*1.25
   }else if(salario1[i] < 400){
    salario1[i] = salario1[i]*1.15
   }
 document.write(`O funcionário ${nome[i]} teve seu novo salário em ${salario1[i]} <br>`);
}

}

