let nota1P, nota2P, nota3P, nota1A, nota2A, nota3A

alert(`Seja bem-vindo a calculadora de notas`);
function validacaoDeNotas (){
    if(nota1A < 0  || isNaN (nota1A) ){
    alert(`Erro, digite um valor válido.`);
    }else if(nota2A < 0  || isNaN (nota2A)){
    alert(`Erro, digite um valor válido.`);
    }else if(nota3A < 0  ||isNaN (nota3A)){
    alert(`Erro, digite um valor válido.`);
    }else if(nota1P < 0  || isNaN (nota1P)){
    alert(`Erro, digite um valor válido.`);
    }else if(nota2P < 0  || isNaN (nota2P)){
    alert(`Erro, digite um valor válido.`);
    }else if(nota3P < 0  || isNaN (nota3P)){
    alert(`Erro, digite um valor válido.`);
    }
}
do{
  notas = prompt("Digite 'A' para ter sua média aritmétrica ou Digite 'P' para ter sua média ponderada.");
  if(notas != 'A' && notas != 'P'){
    alert("Erro, digite 'A' para ter sua média aritmétrica ou Digite 'P' para ter sua média ponderada.");
    location.reload()
  }else if(notas === ''){
    alert("Erro, digite 'A' para ter sua média aritmétrica ou Digite 'P' para ter sua média ponderada.");
    location.reload()
  }
  notas = notas.toUpperCase()
  if(notas === 'A'){
    nota1A = Number(prompt("Insira a nota 1:"));
    nota2A = Number(prompt("Insira a nota 2:"));
    nota3A= Number(prompt("Insira a nota 3:"));
    validacaoDeNotas()
     mediaA = (nota1A+nota2A+nota3A)/3
     document.write(`Sua média aritmétrica é :${mediaA}:`);
    }else if(notas === 'P'){
    nota1P = Number(prompt("Insira a nota 1:"));
    nota2P = Number(prompt("Insira a nota 2:"));
    nota3P = Number(prompt("Insira a nota 3:"));
    validacaoDeNotas()
    media = (nota1P*5)+(nota2P*3)+(nota3P*2)/10
    document.write(`Sua média ponderada é :${media}`);
    } 
}while(notas)