// Listar las propiedades de un objeto que pudieron ser 
// creados de manera dinámica.

const punto = {
    x: 10,
    y: 15,
    // dibujar: function() { // se le puede eliminar el ': function'
    dibujar() {
        console.log('dibujando');
    }
};

// delete punto.dibujar;
if ('dibujar' in punto) {
    punto.dibujar();
} // dibujando

// let keys = Object.keys(punto);
console.log(Object.keys(punto)); // Array(3) [ "x", "y", "dibujar" ]

for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
    /* 
        x 10 
        y 15 
        dibujar 
        function dibujar()
    */
}

for (let entry of Object.entries(punto)) {
    console.log(entry);
    /*
        Array [ "x", 10 ]
        Array [ "y", 15 ]
        Array [ "dibujar", dibujar() ]
    */
}

// Esto hace lo mismo que un for-in, pero los for-in son 
// relativamente nuevos y en códigos más antigus se 
// utilizaba la forma anterior para acceder a los indices.
// Es preferible usar for-in ya que es más moderno.
for (let llave in punto) {
    console.log(llave, punto[llave]);
    /*
        x 10 
        y 15 
        dibujar function dibujar()
    */
}

// Cuando un constructor en JS tiene métodos como Object, 
// a estos se les llama métodos de clases o métodos estáticos.