let soma = 0, num5 = []

for(let i = 0; i<5; i++){
  num5[i] = Number(prompt(`Insira um valor para indice ${i}`))
  soma +=num5[i]
}
document.write(`<br> O resultado da soma é :${soma} <br>`)

for(let i = 0; i<5; i++){
   document.write(`<br> Número que você digitou :${num5[i]}`) 
}