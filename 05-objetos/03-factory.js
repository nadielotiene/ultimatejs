
function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Nicolas', 'nico@holamundo.io');
let user2 = crearUsuario('Felipe', 'felipe@holamundo.io');
console.log(user1, user2);


// Objeto regular sin Factory Function
// let user1 = {
//     id: 2,
//     email: 'chanchito@holamundo.io',
//     name: 'Chanchito',
//     activo: false,
//     recuperarClave: function () {
//         console.log('recuperando clave...');
//     },
// };