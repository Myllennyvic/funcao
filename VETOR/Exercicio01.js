 let numeros = []
 for(let i = 0; i<7; i++){
       numeros[i] = Number(prompt(`Insira um valor para indice ${i} do vetor`))
 }

 for(let i = 0; i<numeros.length; i++){
   console.log(numeros.length-i+"\n")
}