let nomeConta, valorConta, valorTotal =0, sair 

let contador = 0

do{
    contador++
    
    nomeConta = prompt("Digite o nome da sua conta:");
    valorConta = Number(prompt("Digite o valor da conta:"));
    document.write(`conta -> ${nomeConta} : R$${valorConta}`);

    valorTotal = valorTotal+valorConta ;
    document.write(`<br>----------------------<br>`);
    document.write(`valor total : ${valorTotal}`);
    sair = confirm(`vc deseja colocar mais contas?`)
    if(sair){
        continue
    }else{
        break
    }
}while(true);

document.write(`numero de contas ${contador} <br> valor total ${valorTotal}`);
v







    
