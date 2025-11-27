/**
 * Crear algoritmo que devuelva cantidad
 * de números positivos de un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let positivo = 0;

    for (numero of arr) {
        positivo = numero > 0 ? positivo + 1 : positivo;
    }
    return positivo
}

let resultado = cuantosPositivos(array);
console.log(resultado); // 5

// alternativa
// function cuantosPositivos(arr) {
//     let cantidad = 0;

//     for (element of arr) {
//         if ( element > 0) {
//             cantidad++;
//         }
//     }
//     return cantidad
// }