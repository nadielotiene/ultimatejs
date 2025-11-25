// La diferencia dehile y do-while es que while evalua el código
// al comienzo y do-while evalua el bloque de código al final.

let i = 2;

// while (i < 2) {
//     if  (i % 2 == 0)  {
//         console.log('Número par', i);
//     }
//     i++; // <- mantener fuera del if statement para evitar infinite loops
// }

do {
    if  (i % 2 == 0)  {
        console.log('Número par', i);
    }
    i++; // <- mantener fuera del if statement para evitar infinite loops
} while (i < 2);