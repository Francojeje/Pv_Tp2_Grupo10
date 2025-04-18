
let input = document.getElementById('cajadetexto')
let parrafo = document.getElementById('textorepe')

    input.addEventListener('input', () => {
      parrafo.textContent = input.value;
});