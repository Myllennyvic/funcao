let nome = [], nomeProduto = [],quantidade, numDeSeguidores = [], valorDoProduto = [], postagem=[], soma = []

function informacoesDoUsuario (){
    do{
   quantidade = Number(prompt("Insira a quantidade de clientes que você deseja calcular os descontos:"));
    for(let i = 0; i<quantidade; i++){
    nome[i] = prompt(`Insira o @ do instagram para o ${i}º cliente:`);
    numDeSeguidores[i] = Number(prompt(`Insira o número de seguidores do ${i}º cliente:`));
    nomeProduto = prompt(`Insira o nome produto:`)
    valorDoProduto[i] = Number(promt(`Insira o valor do produto para o ${i}º cliente:`));
    } 
    }while(quantidade)
}
function calculoDeDesconto (){
    if(numDeSeguidores[i] >= 5000){
        valorDoProduto[i] = valorDoProduto*0.5
      }else if(numDeSeguidores[i] >= 20000){
        valorDoProduto[i] = valorDoProduto*0.10
      }else if(numDeSeguidores[i] >= 50000){
        valorDoProduto[i] = valorDoProduto*0.15
      }else if(numDeSeguidores[i] >= 100000){
        valorDoProduto[i] = valorDoProduto*0.25
      }
      postagem = prompt(`Você vai postar no instagram? No reel ou story?`);
      postagem = postagem.toUpperCase()
      if(postagem === 'reel'){
       if(numDeSeguidores[i] >=20000){
        valorDoProduto[i] = valorDoProduto[i]*0.10
       }
      }else if(postagem === 'story'){
        if(numDeSeguidores[i] >=20000){
            valorDoProduto[i] = valorDoProduto[i]*0.
           }
      }
        
     
}