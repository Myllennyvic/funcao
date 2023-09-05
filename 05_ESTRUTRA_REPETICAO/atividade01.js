let numero, tabuada

numero = Number(prompt("Digite um número para saber sua tabuada :"));

for(let i = 0; i<=10; i++){
   tabuada = `${numero}` + 'x' + `${i}` + "=" + `${numero * i} <br>` 
   document.write(tabuada)
}