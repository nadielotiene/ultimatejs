let agua = true;
let encendida = false;
let temperatura = 0;

if (!agua) {
    console.log("La tetera no tiene agua, no se puede encender.", encendida);
} else {
    encendida = true;
    console.log("La tetera está encendida", encendida);
}

while (encendida) {
    if (temperatura < 100) {
        console.log(`Calentando agua... la temperatura es de: ${temperatura} grados`);
        temperatura += 25;

    } else {
        encendida = false;
        console.log("La temperatura de la tetera ha llegado al máximo, la tetera se apagará.", encendida);
        console.log(`Ahora tienes agua caliente a ${temperatura} grados`);
    }
}
