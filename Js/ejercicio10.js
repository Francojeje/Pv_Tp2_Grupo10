function calcularPromedio() {
    // Solicitar al usuario que ingrese tres números enteros
    let numero1 = parseInt(prompt("Ingrese el primer número entero:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número entero:"));
    let numero3 = parseInt(prompt("Ingrese el tercer número entero:"));

    // Calcular el promedio
    let promedio = (numero1 + numero2 + numero3) / 3;

    // Mostrar el resultado
    alert("El promedio de los tres números es: " + promedio);
}