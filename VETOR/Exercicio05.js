//* Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes, 
// * e que exiba a lista desses nomes na tela. Após exibir essa lista, 
//*  o programa deve mostrar também os nomes na ordem inversa em que o usuário os digitou, 
//*  um por linha.

let nomes = [];

for (let i = 0; i < 5; i++) {
    const nome = prompt(`Digite o ${i + 1}º nome:`);
    nomes.push(nome);
    
}

for(let i = 0; i <nomes.length; i++){
    document.write("Nomes na ordem que você digitou: ")
    document.write(nomes[i]+"<br>")
    document.write(`----------------------------<br>`)
}


const nomesInvertidos = nomes.slice().reverse();



for (let i = 0 ; i <nomesInvertidos.length; i++) {
        document.write("Nomes invertidos : ")
        document.write(nomesInvertidos[i]+"<br>")
    }







