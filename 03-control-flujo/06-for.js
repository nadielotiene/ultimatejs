// A diferencia de while, contiene todo el código 
// dentro de una sola linea.

// let i = 2;

// while (i < 2) {
//     if  (i % 2 == 0)  {
//         console.log('Número par', i);
//     }
//     i++; // <- mantener fuera del if statement para evitar infinite loops
// }

// for (inicialización;comparación;expreción) {}

for (let i = 2; i < 10; i++) {
    if  (i % 2 == 0)  {
        console.log('Número par', i);
    }
}