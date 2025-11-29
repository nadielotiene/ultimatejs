let obj1 = {};
let obj2 = new Object();

// ~~~~ En la consolea ~~~~
// let objeto = {};
// // undefined
// objeto.constructor
// // ƒ Object() { [native code] }
// let objeto2 = new Object();
// // undefined
// objeto2.constructor
// // ƒ Object() { [native code] }

/**
 * new Array(); []
 * new String(); "" '' ``
 * new Number(); 123
 * new Boolean(); true false
 */

function Usuario() {
    this.name = "Chanchito feliz";
}
let user = new Usuario();
console.log(user.constructor);

// Cuando usamos typeof con constructores new Object() 
// (new Array(), new String(), new Number(), new Boolean())
// nos va a devolver 'object'.
// Cuando usamos un método javascript envuelve toda la linea 
// de código en un objeto y cuando pasa a la proxima linea de 
// ejecución lo va sacar de este objeto

// let a = 4;
// // undefined
// a.toString();
// // '4'

// Los strings, números y booleans literales(vanilla, sin 
// métodos, sin constructores) se comportan distinto a los 
// que fueron creados por los constructores, hay que estar 
// pendiente de esto ya que te podría traer errores en el 
// código y sin darte cuenta por qué.

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1, s2); // 1 + 1 String { "1 + 1" }

// Independiente de cual de los dos utilicemos vamos a poder 
// seguir realizando operaciones de strings sobre estos strings,
// pero si evaluamos el contenido de los strings e intentamos 
// interpretarlos dentro de JS, míra lo que va a ocurrir:

const str1 = "1 + 1";
const str2 = new String("1 + 1");
console.log(eval(s1), eval(s2)); // 2 String { "1 + 1" }

// Utiliza los strings literales para evitar confuciones, pero 
// si necesitas utilizar el constructor y luego necesitas 
// obtener su valor utiliza el método de .valueOf().

const string1 = "1 + 1";
const string2 = new String("1 + 1");
console.log(s2.valueOf()); // 1 + 1

// No solo los strings pueden usar valueOf(), si no tambien los 
// numbers y los boolean.
