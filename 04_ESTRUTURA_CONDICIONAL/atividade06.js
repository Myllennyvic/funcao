let numero, raizQuadrada

numero = Number(prompt("Digite um número para saber sua raiz quadrada :"));

//validação 
if(isNaN (numero) || numero <= 0 ){
    alert(`Não é possivel realizar o cálculo, digite um número positivo.`);
    location.reload()
}else {
    raizQuadrada = Math.floor(Math.sqrt(numero));
} 

if ( raizQuadrada * raizQuadrada === numero){
    alert(`A raiz quadrada do seu ${numero} é ${raizQuadrada}`);
}else{
    alert(`Não é possivel ter raiz desse número`);
}


 
