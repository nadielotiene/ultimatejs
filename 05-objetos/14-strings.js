const saludo = "Hola Mundo!";

const despedida = new String("Chao mundo :(");
console.log(typeof saludo); // string
console.log(typeof despedida); // object

// Número de letras en el string (empezando desde 0 y contando espacios).
console.log(saludo.length); // 11
// Devuelve el índice del parametro
console.log(saludo.indexOf("Mu")); // 5
// Si no existe devuelve -1
console.log(saludo.indexOf("asdf")); // -1

// La razón por la que devuelve -1 es por que cuando se
// chequea si el string existe se usa en un if statement
// if (saludoindexOf("Mu") >= 0)

// Checkea si un texto existe dentro de otro texto
console.log(saludo.includes(" Mundo")); // true
// Reemplaza el texto ("original", "reemplazo")
console.log(saludo.replace("Mundo", "Nicolas")); // Hola Nicolas!
// pero... no se guarda en la variable
console.log(saludo.replace("Mundo", "Nicolas"), saludo); // Hola Nicolas! Hola Mundo!
// cambia todo el texto a minusculas
console.log(saludo.toLowerCase()); // hola mundo!
// cambia todo el texto a mayusculas
console.log(saludo.toUpperCase()); // HOLA MUNDO!

// Devuelve índice seleccionado
console.log(saludo.substring(0, 4)); // Hola
// Método antiguo, deprecado
console.log(saludo.substr(2, 4)); // la M

const espacios = "     Hola   Mundo!         ";
console.log(espacios.trim()); // Hola   Mundo!
console.log(espacios.trimEnd()); //       Hola   Mundo!
console.log(espacios.trimStart()); // Hola   Mundo!     
