


    postagemStory = prompt(`Digite 'sim' para ter 5% de desconto postanto um story ou digite 'não' para seguir:`);
    postagemStory = postagemStory.toUpperCase()
    if(postagemStory === 'sim'){
      if(numDeSeguidores[i] >=20000){
          valorDoProduto[i] = valorDoProduto[i]*0.15
      }
  }else if(postagemStory === 'não'){
  postagemReel = prompt(`Digite 'sim' para ter 10% de desconto postando um reels ou digite 'não' para seguir:`);
    postagemReel = postagemReel.toUpperCase()
      if(postagemReel === 'sim'){
          if(numDeSeguidores[i] >=20000){
              valorDoProduto[i] = valorDoProduto[i]*0.20
          }
      }
  }else if(postagemReel === 'não'){
   for(let i = 0; i<quantidade; i++){
   document.write(`Nome do usuário : ${nome[i]} <br> Valor do produto : ${valorDoProduto[i]} <br> Valor do produto com desconto ${valorDoProduto}`)
  }
  }