const cambiodecolor = () => {
    let parrafo = document.querySelector(".parrafo")
    parrafo.style.color= "red"
    let titulo = document.querySelector(".titulo")
    titulo.style.color="red"
}
document.getElementById("boton").addEventListener("click", cambiodecolor);