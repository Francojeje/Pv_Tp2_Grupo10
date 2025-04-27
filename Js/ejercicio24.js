let body = document.getElementById("body")
const cambiodecolor = (e) => {
    e.preventDefault();
    let colores = ["red","lightblue","green","pink","orange","purple","blue","brown","black","grey","lightgreen","yellow","beige"]
    const indicecolor = Math.floor(Math.random() * colores.length);;
    body.style.backgroundColor = colores[indicecolor]
    console.log("El color cambio a: " + colores[indicecolor])
}
document.getElementById("boton").addEventListener("click", cambiodecolor);