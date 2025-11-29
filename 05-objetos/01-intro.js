// Programación Orientada a Objetos (POO) o
// Object Oriented programming (OOP).

let user = { // objeto
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    direccion: { // objeto dentro de un objeto
        calle: 'Queen st',
        numero: 15,
    },
    activo: true,
    recuperarClave: function () { // función anonima
        console.log('Recuperando clave...');
    },
};