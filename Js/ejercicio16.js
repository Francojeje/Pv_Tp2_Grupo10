function iniciarPrograma() {
    const numeroInicial = parseInt(prompt("Ingrese el número inicial:"));
    const numeroFinal = parseInt(prompt("Ingrese el número final:"));

    if (!isNaN(numeroInicial) && !isNaN(numeroFinal)) {
        let suma = 0;
        for (let i = numeroInicial; i <= numeroFinal; i++) {
            suma += i;
        }
        alert(`La suma del rango de ${numeroInicial} a ${numeroFinal} es: ${suma}`);
    } else {
        alert("Por favor, ingrese valores numéricos válidos.");
    }
}