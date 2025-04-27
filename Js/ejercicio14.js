
const duplicar = (arreglo) =>{
    let nuevo = [];
    for(let i = 0; i < arreglo.length ;i++){
        nuevo.push(arreglo[i]*2)
    }
    return nuevo;
}
let arreglo=[2,4,5,6]
let duplicado = duplicar(arreglo)
alert("Original: " + arreglo + " Duplicado: " + duplicado)
