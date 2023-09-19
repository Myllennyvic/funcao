let  sair, quantidadeDeProduto ,listaDeCompras = []

alert(`Bem-vindo a lista de compra`)

do{
  quantidadeDeProduto = Number(prompt("Insira a quantidade de produtos para sua lista de compras ou digite '0' para sair da lista de compra"));
  if(quantidadeDeProduto === 0 || isNaN(quantidadeDeProduto)){
    sair = confirm(`Você deseja sair da lista de compras?`)
  }else if(sair){
    break
  }else{
    for(let i = 1; i<=quantidadeDeProduto; i++){
        listaDeCompras[i] = (prompt(`Insira o nome dos produtos para fazer sua lista de compras ${i}`));
        if(listaDeCompras === 0){
         alert(`'ERRO', Não podemos receber esse valor, insira apenas textos!`)
        }
      }
      for(let i = 1; i<=quantidadeDeProduto; i++){
        document.write(`<br> Nome do produto cadastrado :${listaDeCompras[i]}`) ;
     }
    continue
  }
}while(sair)