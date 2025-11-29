const user = { id: 1 };

// usando notacion de punto puedes agregar nuevos valores 
// aunque la variable sea constante. Puedes añadir o quitar
// propiedades siempre y cuando no le cambies el valor.

user.name = 'Nicolas'; 
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();


delete user.name; // usa delete para eliminar propiedades.
delete user.guardar;

console.log(user);

// Para no poder modificar el objeto, no puedes cambiar ni 
// las propiedades ni los valores de este.
const user1 = Object.freeze({ id:1 });
user1.name = 'Nico'; // lo ignora
user1.id = 2; // lo ignora
console.log(user1); // id: 1

// Si queres cambiarle las propiedades que ya tiene pero no
// agregarle o quitarle propiedades se usa Object.seal().
const user2 = Object.seal({ id:1 });
user2.name = 'Chanchito'; // lo ignora
user2.id = 2; // lo modifica
console.log(user2); // id: 2