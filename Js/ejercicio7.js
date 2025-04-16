// Declarar un array denominado nombres con al menos 6 nombres
const nombres = ["Alejandro", "Franco", "Carlos", "Diana", "Eduardo", "Santiago"];

// Obtener el nombre más largo del array nombres
let nombreMasLargo = nombres[0];

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}

console.log("El nombre más largo es:", nombreMasLargo);