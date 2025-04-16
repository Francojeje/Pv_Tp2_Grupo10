function verificarParidad() {
    const numero = parseInt(prompt("Por favor, ingrese un número:"));
    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
    } else if (numero % 2 === 0) {
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}