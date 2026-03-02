let tipo = "perro";
let peso = 10;
let cantidad;

if (tipo.toLowerCase() === "perro") {
    if (peso >= 20) {
        cantidad = 400;
    } else if (peso >= 10) {
        cantidad = 300;
    } else if (peso >= 5) {
        cantidad = 200;
    } else if (peso < 5) {
        cantidad = 100;
    } else {
        console.log("Error")
    }

} else if (tipo.toLowerCase() === "gato") {
    if (peso >= 6) {
        cantidad = 150;
    } else if (peso >= 3) {
        cantidad = 100;
    } else if (peso < 3) {
        cantidad = 50;
    } else {
        console.log("Error")
    }
}

if (cantidad !== undefined) {
    console.log(`El ${tipo} pesa ${peso}kg y la cantidad de comida que se le proveera seran ${cantidad}g`);
} else {
    console.log("Error, tipo de mascota no es válido. Por favor solo ingrese 'perro' o 'gato'.")
}
