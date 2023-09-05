let a, b, c 

a = Number(prompt("Digite o lado A :"))    
b = Number(prompt("Digite o lado B :"))
c = Number(prompt(" Digite o lado C :"))

if(isNaN(a, b, c) || a+b < c || a+c < b || b+c < a){
  alert(`Não é possivel formar triangulo, digite novamente`);
  location.reload()
} else if(a === b && b === c){
    alert(`Triangulo Equilátero `);
 }else if ( a === b || b === c || a === c){
  alert(`Triangulo Isósceles`);
 } else {
    alert(`Triangulo Escaleno`);
 }