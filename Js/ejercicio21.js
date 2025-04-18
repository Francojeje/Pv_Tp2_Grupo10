
let input = document.getElementById('cajadetexto')
let parrafo = document.getElementById('textorepe')

    input.addEventListener('input', function() {
      parrafo.textContent = input.value;
});