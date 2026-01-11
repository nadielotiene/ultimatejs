let paquete = "no registrado";

let libre = true;
let free = paquete !== "no registrado";
let EUR = paquete === "EUR" || paquete === "AllAccess";
let Nacional = paquete === "Nacional" || paquete === "LATAM" || paquete === "AllAccess";
let LATAM = paquete === "LATAM" || paquete === "AllAccess";

console.log('Paquete:', paquete);
console.log('Acceso a contenido libre:', libre);
console.log('Acceso a contenido free:', free);
console.log('Acceso a contenido EUR:', EUR);
console.log('Acceso a contenido Nacional:', Nacional);
console.log('Acceso a contenido LATAM:', LATAM);
