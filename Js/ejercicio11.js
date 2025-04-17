function calcularConsumo() {
    const kilometros = parseFloat(prompt("Ingrese el número de kilómetros recorridos por su vehículo:"));
    const litros = parseFloat(prompt("Ingrese el número de litros de combustible consumidos:"));

    // Validar que los valores ingresados sean números válidos
    if (isNaN(kilometros) || isNaN(litros) || kilometros <= 0 || litros <= 0) {
        alert("Por favor, ingrese valores válidos para kilómetros y litros.");
    } else {
        const consumoPorKilometro = litros / kilometros;

        // Mostrar el resultado
        alert(`El consumo de combustible por kilómetro es: ${consumoPorKilometro.toFixed(2)} litros/km`);
    }
}