let nota50, nota10, nota100 , caixaEletronico

caixaEletronico = Number(prompt("Digite o valor que você precisa sacar:"));

if(isNaN (caixaEletronico) || caixaEletronico %10 ){
    alert(`Você não pode realizar saque nesse formato, insira outro valor.`);
}
 
 if(caixaEletronico%10 == 0 ){
    nota100 = parseInt((caixaEletronico/100))
    nota50 = parseInt((caixaEletronico%100)/50)
    nota10 = parseInt(((caixaEletronico%100)%50)/10)
 
alert(`Nota100:${nota100} \n Nota50:${nota50} \n Nota10:${nota10}`)
}else {
    alert(`erro`)
}
 
