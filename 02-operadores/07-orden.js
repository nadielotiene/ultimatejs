// El orden de operaciones aritmeticos es: 
// () Parentesis siempre ejecuta primero
// (**) Exponente
// (* o /) multiplicaión o división, el primero que aparesca
// % Modulo
// (+ o -) suma o resta, el primero que aparesca

// Los parentesis cambian el orden de operacion del cálculo.

// Hay que agregar el * entre el valor y el parentesis.
// let resultado = 8/2*(2+2); 
// Para cambiar el orden de ejecución.
let resultado = 8/(2*(2+2)); 

console.log(resultado);