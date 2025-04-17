let paises = document.getElementById("paises")
let capitales = document.getElementById("capitales")

paises.addEventListener("change", function (){
    const valor = paises.value
    console.log (valor)
    switch(valor){
    case "Argentina":
      capitales.selectedIndex = 0;
      break;
    case "Brasil":
      capitales.selectedIndex = 1;
      break;
    case "Chile":
      capitales.selectedIndex = 2;
      break;
    case "Ecuador":
      capitales.selectedIndex = 3;
      break;
    case "Peru":
      capitales.selectedIndex = 4;
      break;
    case "Uruguay":
      capitales.selectedIndex = 5;
      break;
    default:
      capitales.selectedIndex = -1;
    }
    console.log (capitales.value)
})