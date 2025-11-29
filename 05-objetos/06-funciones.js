// Las funciones son objetos de primera clase, quiere decir 
// que pueden ser asignadas a otras variables pasadas como 
// argumentos a otras funciones o retornadas de otras funciones.
// Y además éstas también tienen propiedades.

function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name); // Usuario
console.log(Usuario.length); // 1

const U = Usuario;
let user = new U('Nicolas');

console.log(user) // Object { nombre: "Nicolas" }

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1); // Object { nombre: "Chanchito" }

function returned() {
    return function() {
        console.log('Hola Mundo');
    }
}

let saludo = returned();
saludo(); // Hola Mundo