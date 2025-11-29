//  { id: 1, recuperarClave: function(){} }
function Usuario() { // el nombre de la función siempre va en PascalCase
    this.id = 1;
    this.recuperarClave = function () { // Médoto
        console.log('Recuperando clave...');
    }
}

// Hace falta usar la palabra reservada 'new' para poder ver el reultado.
let usuario = new Usuario();

console.log(usuario);


// Cuando tenemos una propiedad y le estamos asignando una 
// función (sea factory function o funcion constructora) 
// a estas se les llama médotos. Un método es una función que 
// fue asignadaa una propiedad de un objeto. 

// Cuando usamos la palabra reservada 'new' ocurren cuatro 
// cosas: 
//  - se crea un objeto literal del aire
//  - luego se vincula el prototipo de la función con el 
//    objeto que se acaba de crear.
//  - después éste objeto vacío que se acaba de crear del
//    aire se le asigna a la palabra reservada 'this' ('this'
//    siendo el objeto vacío que se creó).
//  - Si la función (Usuario en este caso) no retorna nada, 
//    retorna automaticamente 'this'.
