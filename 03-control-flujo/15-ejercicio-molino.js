let contenedor = true;
let tazas = 5;
let tiempo = 5;

if (!contenedor) {
    console.log("Error: No se puede encender, falta el contenedor");
}

if (tazas <= 0) {
    console.log("Error: No se ha seleccionado un número válido de tazas");
}

if (contenedor && tazas > 0) {
    console.log("Iniciando proceso");
    let tiempoTotal = tazas * tiempo;

    console.log("Tazas:", tazas);
    console.log("Tiempo total:", tiempoTotal, "segundos");
}