//  Uma pequena loja de artezanato possui apenas um vendedor e comercializa dez tipos de objetos.
 //  O vendedor recebe, mensalmente, salário de R$400,00, acrescido de 5% do valor de vendas. 
//O
  // valor unitário dos objetos deve ser informado e armazenado em um vetor; a quantidade vendida
   //de cada peça deve ficar em outro vetor, mas na mesma posição. Crie um programa que receba
  //os preços e quantidade vendidas, armazenando-os em seus respectivos vetores (ambos com tamanho 10).
 //Depois, determine e mostre:
   
   //1. Um relatório contento quantidade vendida, valor unitário e valor de cada objeto. Ao final,
   	 // deverá ser mostrado o valor geral das vendas e o valor da comissão que sera paga ao vendedor;
   //2. O valor do objeto mais vendido e sua posição no vetor(não se preocupe com empates)/
debugger
function vendaObjeto (){
     preco = []
     quantidade = []
    for( let i = 0; i<=2; i++){
      preco[i] = Number(prompt(`Insira o preço do ${i+1} objeto:`));
      quantidade[i] = Number(prompt(`Insira a quantidade que foi vendida do ${i+1} objeto`));
    }
    return{preco,quantidade}
}
vendaObjeto()

function acrescido5 (quantidade){
   comissao = 0
   valorvenda = 0 
   for(let i = 0; i<=2; i++){
   valorObjeto = preco[i] * quantidade[i]
   valorvenda += valorObjeto 
   comissao += valorvenda *0.05
   }
   return{comissao, valorvenda}
}
acrescido5()

function objetoMaiVendido (){
  maiorQuantidades = quantidades[0]
  indiceMaiorQuantidade = 0 
  for(let i = 0; i<=2; i++){
   if(quantidades[i] > maiorQuantidades){
      maiorQuantidades = quantidades[i]
      indiceMaiorQuantidade = [i]
   }
  }
  return{maiorQuantidades, indiceMaiorQuantidade}
}
objetoMaiVendido()

function relatório(){
    vendaObjeto(preco, quantidade);
    acrescido5(comissao, valorObjeto);

    for(let i = 0; i<=2;i++){
     valorObjeto = preco[i] * quantidade[i]
     document.write(`Objeto ${i+1} : Quantidade vendida = ${quantidade[i]} Valor unitário = R$${preco[i].toFixed(2)} Valor = ${valorObjeto[i].toFixed(2)} `);
    }
    document.write(`Valor geral das vendas: ${valorvenda.toFixed(2)}`);
    document.write(`Valor da comissão : ${comissao.toFixed(2)}`);
    objetoMaiVendido(quantidades);
 document.write(`O objeto mais vendido é o objeto ${indiceMaiorQuantidade + 1} com ${maiorQuantidade} unidades vendidas.`);

}
relatório()