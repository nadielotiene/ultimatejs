let dispositivo = "MacBook";
let potencia;

// If Statements...
// if (dispositivo === "MacBook") {
//     potencia = 65;
// } else if (dispositivo === "celular") {
//     potencia = 25;
// } else if (dispositivo === "lampara USB") {
//     potencia = 5;
// } else {
//     potencia = 0;
// }

// ...O Switch...
switch (dispositivo.toLowerCase()) {
    case "celular":
        potencia = 25;
        break;
    case "macbook":
        potencia = 65;
        break;
    case "lámpara usb":
        potencia = 5;
        break;
    default:
        potencia: 0;
        console.log("Dispositivo no reconocido. No se suministrará enegía.");
}

if (potencia > 0) {
    console.log(`La batería suministra ${potencia} watts a ${dispositivo}.`);
}
