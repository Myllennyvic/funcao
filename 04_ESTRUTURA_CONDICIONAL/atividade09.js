let velocidadePermitida, velocidadeCondutor
velocidadeCondutor = Number(prompt("Digite a velocidade permitida na via :"));

velocidadeCondutor = Number(prompt("Digite sua velocidade :"));


 if (velocidadeCondutor < 0 ){
    alert(`Velocidade inválida`);
 } else if (velocidadeCondutor <= velocidadePermitida){
    alert(`Sem multa`);
 } else if (velocidadeCondutor <= velocidadePermitida * 1.2 ){
    alert(`Multa leve`);
 }else{
    alert(`Multa grave`)
 }

 