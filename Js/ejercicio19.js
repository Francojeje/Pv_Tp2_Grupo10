const capturar = (event) =>{
    event.preventDefault()
    let nombre = document.querySelector("#Nombre").value
    let apellido = document.querySelector("#Apellido").value
    let libreta= document.querySelector("#Libreta").value
    alert ("Los datos ingresados son: " + "\n"+ 
        "Nombre: " + nombre + "\n"+ 
        "Apellido: " +apellido +"\n"+
        "Libreta Univesitaria: " + libreta)
}
document.getElementById("boton").addEventListener("click", capturar);

