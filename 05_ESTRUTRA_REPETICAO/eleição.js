let numCandidatos, sair, canditado1 = 0 , canditado2 = 0 , canditado3 = 0 , canditado4 = 0 , totalVoto = 0, nulo = 0, branco = 0 , voto = 0
do{
numCandidatos = Number(prompt("Insira o número do seu canditado: (1, 2, 3 ou 4) ou digite 5 para voto em branco ou 6 para voto nulo"));
 voto++
        if(numCandidatos === 1){
            canditado1++
            totalVoto++
        }
        if(numCandidatos === 2){
           canditado2++
           totalVoto++
        }
         if(numCandidatos === 3){
           canditado3++
           totalVoto++
         }
          if(numCandidatos=== 4){
           canditado4++
           totalVoto++}
          if (numCandidatos === 6){
          nulo++
          totalVoto++}
          if(numCandidatos === 5){
          branco++
          totalVoto++
         }
      sair = confirm(`Você deseja sair da aplicação?`);
     if (sair){
        continue
    } else {
        break
    }
}while(sair)


document.write(`A quantidade de votos para o canditato 1 é ${canditado1} <br> A quantidade de votos para o canditato 2 é ${canditado2} <br> A quantidade de votos para o canditato 3 é ${canditado3} <br> A quantidade de votos para o canditato 4 é ${canditado4}`);

document.write(`O total de votos é: ${voto} <br>`)