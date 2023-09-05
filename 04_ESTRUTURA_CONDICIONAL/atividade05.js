let horaBrasil, horaFranca

horaBrasil = Number(prompt("Digite a hora no horário do Brasil:"));

//validação 
if(isNaN(horaBrasil) ||horaBrasil < 0 || horaBrasil > 24){
   alert(`Hora não válida, digite novamente.`);
   location.reload()
}
//lógica 
if(horaBrasil < 24){
 horaFranca = (horaBrasil + 5)%24
 alert(`Horário na França: ${horaFranca}`);
}

