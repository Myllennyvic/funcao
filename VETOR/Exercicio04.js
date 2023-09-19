let sair, numDeFuncionarios , salario, somaSalario = 0, media , menorSalario, maiorSalario
const salarios = []

numDeFuncionarios = Number(prompt("Digite o número de funcionário"));

for(let i = 1; i <numDeFuncionarios; i++){
  salario = Number(prompt(`Digite o salário dos funcionários ${i}`))
  salarios.push(salario)
}

if(salarios.length >=3){
  salarios.sort((a, b) => a - b);
  menorSalario = salarios[0];
  maiorSalario = salarios[salarios.length - 1];

for(let i = 0; i<salarios.length; i++){
  somaSalario += salarios[i];
}
media = somaSalario / (salarios.length-2);
    alert(`O menor salário é: ${menorSalario}`);
    alert(`O maior salário é: ${maiorSalario}`);
    alert(`A média dos salários dos funcionários é: ${media.toFixed(2)}`)
}else{
  alert(`Você precisa de pelo menos 3 salários para calcular a média.`)
}