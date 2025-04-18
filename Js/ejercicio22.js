let input = document.getElementById('cajadetexto')
let parrafo = document.getElementById('textorepe')
    input.addEventListener('input', function () {
      parrafo.textContent = input.value;
      let colores = ["red","lightblue","green","pink","orange","purple","blue"]
        const caracteres = input.value.length
        const indicecolor = Math.floor(caracteres / 20) % colores.length;
        parrafo.style.backgroundColor= colores[indicecolor] 
});
