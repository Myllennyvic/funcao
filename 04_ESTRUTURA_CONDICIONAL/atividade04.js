let bairro;

 bairro = (prompt("Digite o bairro para saber o valor do frete \n Antares \n\t Barro Duro \n\t Bebedouro \n\t Benetido Bentes \n\t Centro \n\t Clima Bom \n\t Pajuçara \n\t Ponta Verde \n\t Jatiuca:"));

 bairro = bairro.toUpperCase()
 
 if(bairro === ``){
   alert("Digite um bairro válido");
   location.reload();
 }else{
    switch(bairro){
        case "ANTARES":
          alert("A taxa de entrega é: 7.00 reais");
        break;

        case "BARRO DURO":
          alert("A taxa de entrega é: 5.00 reais");
        break;

        case "BEBEDOURO":
          alert("A taxa de entrega é: 8.00 reais");
        break;
        case "BENEDITO BENTES":
          alert("A taxa de entrega é: 6.00 reais");
        break;
        case "CENTRO":
          alert("A taxa de entrega é: 10.00 reais");
        break;
        case "CLIMA BOM":
          alert("A taxa de entrega é: 4.00 reais");
        break;
        case "PAJUÇARA":
        case "PONTA VERDE":
        case "JATIÚCA":
          alert("A taxa de entrega é: 15.00 reais");
        break;
        default:
        break;
        
    }
 }










