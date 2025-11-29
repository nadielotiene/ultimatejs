// Existe un constructor que se llama function y ademas 
// existen otras propiedades que tienen las funciones que nos 
// pueden servir para poder reutilizar código. 

// No es muy práctico, funciones normales son más útiles.

function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando...')};
}

// no se usa mucho
// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function() { console.log('Dibujando...')};
// `);

// const p = new Point(1, 2);
// console.log(p); // Object { x: 1, y: 2, dibujar: dibujar() }


// Esto se utliza para extender objetos y otras funciones.

// Function.call({ contexto de this.}, args);
let punto = { z: 7 }
Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]); // igual que call pero se pasan los args en forma de array.

console.log(punto); // Object { z: 7, x: 1, y: 2, dibujar: dibujar() }