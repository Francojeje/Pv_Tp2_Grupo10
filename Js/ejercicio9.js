document.addEventListener("DOMContentLoaded", () => {
    // Solicitar al usuario que ingrese su nombre
    const nombreUsuario = prompt("Por favor, ingresa tu nombre:");

    // Mostrar un mensaje de bienvenida
    if (nombreUsuario) {
        alert(`Hola ${nombreUsuario}, bienvenido a Programación Visual!`);
    } else {
        alert("Hola, bienvenido a Programación Visual!");
    }
});