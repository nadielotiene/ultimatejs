console.log(
    // Pi
    Math.PI, // 3.141592653589793
    // Valor absoluto
    Math.abs(-15), // 15
    // Redondea los decimales
    Math.round(15.5), // 16
    Math.round(15.4), // 15
    // Redondea hacia abajo
    Math.floor(15.9), // 15
    //  Redondea hacia arriba
    Math.ceil(15.1), // 16
    // Calcula la potencia del número
    Math.pow(2, 3), // 8
    // Devuelve la raíz cuadrada
    Math.sqrt(9), // 3
);

// Devuelve un número pseudo aleatorio
console.log(Math.random());

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1, 10));