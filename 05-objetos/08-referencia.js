
// números
let a = 1;
let b = a;

b++;
console.log(a, b); // 1 2


// objetos
let c = {};
let d = a;

b.prop = 1;
console.log(a, b); // 1 2


// funciones
let e = 1;

function suma(n) {
    n++;
}

suma(e);
console.log(e); // 1
    // No cambia el número por que JS ve a e y n como dos variables distintas.


// objetos
let f = { prop: 1 };

function suma(n) {
    n.prop++;
}

suma(f);
console.log(f); // Object { prop: 2 }
    // Esta vez sí modifica el número por que le pasaste a f la referencia de n.


// Los tipos de datos primitivos se copian y los de referencia
// (objetos, arrays y funciones) se crea una referencia.