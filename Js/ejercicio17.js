let string = prompt("Ingrese un string")
const contarletra = (cadena) => {
    let long = cadena.length 
    let cont = 0 
    for(let i = 0 ; i < long ; i++){
        if (cadena[i]== 'a' || cadena[i]== 'A'){
            cont = cont + 1
        }
    }
    return alert("Cantidad de 'A o a' en el string: " + cont)
}
contarletra(string)
