let idade = number(prompt("Insire uma idade :"));

function verificarMaiorIdade (a){
    if(a >= 18){
    console.log(`Maior de idade`);
    }else{
    console.log(`Menor de idade`);
    }
    return
}

let resultado = verificarMaiorIdade(12)

console.log(resultado)