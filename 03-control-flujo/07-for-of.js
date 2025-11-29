// Se utiliza para iterar un listado de elementos, 
// sin necesitar indices

let animales = ['Chanchito feliz', 'Dragón', 'Perrito'];

// For of
for (let animal of animales) {
    console.log(animal);
}

// While
let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}