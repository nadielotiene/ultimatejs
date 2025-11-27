/**
 * Crear algoritmo que devuelva un
 * array de objetos en base a pares
 */

let pairs = [
    [1, { name: "Nicolas" }],
    [2, { name: "Felipe" }],
    [3, { name: "Chanchito" }],
];

let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);


// Alternativa
// function toCollection(arr) {
//     let collection = [];
//     for (let par of arr) { // for of para iterar sobre cada par
//         let id = par[0]; // extrae el id del primer elemento
//         let objeto = par[1]; // extraer el objeto del segundo elemento
//         let nuevoObjeto = { // combinar las propiedades de id y objeto
//             id: id,
//             ...objeto, // se puede usar spread operator
//             // name: objeto.name, // o llamar los objetos directamente
//         };
//         collection.push(nuevoObjeto); // agrega el objeto al array
//     }
//     return collection; // devolver el array completo
// }


// Versión más compacta
// function toCollection(arr) {
//     let collection = [];
//     for (let par of arr) {
//         collection.push({
//             id: par[0],
//             ...par[1],
//         });
//     }
//     return collection;
// }