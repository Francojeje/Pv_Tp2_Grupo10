let input = document.getElementById('cajadetexto')
let parrafo = document.getElementById('textorepe')
    input.addEventListener('input', function () {
      parrafo.textContent = input.value;
      const caracteres = input.value.length
        if(caracteres>=20){
          parrafo.style.backgroundColor='red'
        }else{
          parrafo.style.backgroundColor='#56586c'
        }
        
});
