const opcion = document.getElementById('form')
let parrafo = document.getElementById('textorepe')
opcion.addEventListener("change",function(e){
        if (e.target.name === 'opcion') {
        parrafo.textContent = "Elegiste: "+  e.target.value;
    }
})