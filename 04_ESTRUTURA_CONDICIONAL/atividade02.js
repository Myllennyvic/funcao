const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));
const nota3 = Number(prompt("Digite a terceira nota:"));
const nota4 = Number(prompt("Digite a quarta nota:"));

if(isNaN(nota1) || nota1 > 10 || nota1 < 0){
    alert(`Nota ${nota1} não é válida`);
    location.reload()
  }else if(isNaN(nota2) || nota2 > 10 || nota2 < 0){
    alert(`Nota ${nota2} não é válida`);
    location.reload()
  }else if(isNaN(nota3) || nota3 > 10 || nota3 < 0){
    alert(`Nota ${nota3} não é válida`);
    location.reload()
  }else if(isNaN(nota4) || nota4 > 10 || nota4 < 0){
    alert(`Nota ${nota4} não é válida`);
    location.reload()
  }

//Lógica 01 
const notaTotal = (nota1 + nota2 + nota3 + nota4)/4

if(notaTotal >= 1.0 && notaTotal < 7.0){
    alert("Você está reprovado");
}else if(notaTotal >= 7.0 && notaTotal <=10){
    alert("Você está aprovado");
}else {
    alert(`Cara pálida, nota inválida.`);
    location.reload()
}