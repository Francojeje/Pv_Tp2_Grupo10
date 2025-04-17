function sumarRango() {
    const numeroInicial = parseInt(prompt("Ingrese el número inicial:"));
    const numeroFinal = parseInt(prompt("Ingrese el número final:"));

    if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    if (numeroInicial > numeroFinal) {
        alert("El número inicial debe ser menor o igual que el número final.");
        return;
    }

    let suma = 0;
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;
    }
    return { suma, numeroInicial, numeroFinal }; 
}

const resultado = sumarRango();
if (resultado) {
    alert(`La suma del rango de ${resultado.numeroInicial} a ${resultado.numeroFinal} es: ${resultado.suma}`);
}