let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};

for (let prop in user) {
    // console.log(prop);
    console.log(prop, user[prop]);
}

let animales = ['Chanchito feliz', 'Dragón', 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}

// Si vas a acceder a los elementos de un array, 
// no utilices for-in, utiliza for-of.