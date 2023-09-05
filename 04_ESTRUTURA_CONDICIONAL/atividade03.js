let  pesoideal, sexo , calculoTotal

altura = Number(prompt("Digite sua altura:"));
sexo = prompt("Digite 'F' para feminino e 'M' para masculino: ");

//toUppercase() - caixa alta 
//toLowercase() - caixa baixa

sexo = sexo.toUpperCase()

if(isNaN(altura) || altura === 0 || altura >= 2.51){
  alert(`Digite uma altura válida ${altura}`);
  location.reload()
}else if(sexo != `F` && sexo != `M`){
  alert(`Erro, digite "F" para feminino ou "M" para masculino`);
  location.reload()
}

if (sexo === "M"){
   calculoTotal = 22*(altura*altura);
   alert(`Sua peso ideal é:\n ${calculoTotal}`);
}else if (sexo === "F"){
    calculoTotalF = 21*(altura*altura);
    alert(`Sua peso ideal é:\n ${calculoTotalF}`);
}



