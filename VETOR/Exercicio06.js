//* Crie um programa que solicite a entrada de 10 números pelo usuário, 
 //* armazenando-os em um vetor, e então monte outro vetor com os valores 
 //* do primeiro multiplicados por 5. Exiba os valores dos dois vetores na tela, 
 //* simultaneamente, em duas colunas (um em cada coluna), uma posição por linha.
 
 const num = []
 const multiplicados = []

 for(let i = 0; i < 10; i++){
   const num1 = Number(prompt(`Insira um número: ${i}`));
   num.push(num1);
   multiplicados.push(num1*5);
 }

document.write(`Número originais || Números multiplicados <br>`);
document.write(`   -----------------||----------------------`);

for(let i = 0; i < 10; i++){
document.write( `<br>${num[i]}                          ||                                                    ${multiplicados[i]}`);
}