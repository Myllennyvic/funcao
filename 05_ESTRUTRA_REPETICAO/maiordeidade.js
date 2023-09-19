
let idade, media = 0, contador = 0  

for(let i = 0; i<=3; i++){
    idade = Number(prompt("Insira sua idade:"));
    media = (media+idade)/3
    if(idade >=18){
    console.log(idade)
     contador++
    }
}
alert(contador)






