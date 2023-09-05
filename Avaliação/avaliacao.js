let numOperarios, pecasFabricadas, sexo , totalSalario1 = 1500 ,totalSalario2 = 1500, totalSalario3 = 1500, totalPecas, mediaPecasHomens, mediaPecasMulheres, salarioMaior

do{
    numOperarios = Number(prompt("Insira seu numero de identificação :"));
    pecasFabricadas = Number(prompt("Insira o número de peças fabricadas por mês:"));
    if(numOperarios === 0 || isNaN(numOperarios)){
        alert(`Digite um valor com um número válido!`);
    }
    
    sexo = parseFloat(prompt("Insira seu sexo: 'F' para Feminimo e 'M' para masculino"));
    if(sexo !== 'F' || sexo !== 'M'){
    alert(`Digite novamente`);
   }   

}while(numOperarios === 0 || isNaN(numOperarios))

//lógica 
for(let i = 1; i <=15 ; i){
    if(pecasFabricadas === 20){
       alert(`Classe 1, seu número é ${numOperarios} e seu salário é : ${totalSalario1}`);
    } else if (pecasFabricadas >=21 && pecasFabricadas <=30){
       totalSalario2 = (totalSalario2*0.03)+1500
       alert(`Classe 2, seu número é ${numOperarios} e seu salário é : ${totalSalario2}`);
    }else if (pecasFabricadas === 30){
      alert(`Classe 3, seu número é ${numOperarios} e seu salário é ${totalSalario3}`);
      totalSalario3 = (totalSalario3*0.05)+1500
    }
} 







