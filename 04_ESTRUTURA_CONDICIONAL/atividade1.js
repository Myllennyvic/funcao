const valor1 = Number(prompt("Digite um número:"));
const valor2 = Number(prompt("Digite um número:"));
//validação . //isnan - gerar um erro .

if(valor1 === 0 || isNaN(valor1)){
  alert(`Valor ${valor1} não é válido para o sistema.`);
  location.reload()
}else if (valor2 === 0 || isNaN(valor2)){
    alert(`Valor ${valor2} não é válido para o sistema.`);
  location.reload()
}

//lógica .
if(valor1 > valor2 ){
   alert("O número maior é:"+valor1);
}else if(valor2 < valor1){
   alert("O número maior é:"+valor2);
}else{
    alert(`Não é possivel fazer a comparação entre os valores ${valor1} - ${valor2}`);
    location.reload()
}