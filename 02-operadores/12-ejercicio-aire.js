let largo = 4;
let ancho = 3.8;
let area = largo * ancho;

let tonelada1 = area < 15;
let tonelada1_5 = area >= 15 && area <= 25;
let tonelada2 = area > 25 && area <= 30;

console.log("Area de la habitación: ", area, "m²");
console.log("Requiere 1 tonelada:", tonelada1);
console.log("Requiere 1.5 tonelada:", tonelada1_5);
console.log("Requiere 2 tonelada:", tonelada2);
