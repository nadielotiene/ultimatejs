const saludo = "Hola \\mundo!\nbienvenidos a\t \"ultimate javascript\" :)";

const primerNombre = 'Nicolas';
const plantillaStr = `Hola ${primerNombre}!

Bienvenidos a "Ultimate JavaScript" :)

Saludos Nico.
`;

console.log(plantillaStr);

// Se pueden llamar números e.g. ${2 + 2} o también funciones
// como ${miFuncion}

function plantilla(nombre) {

    return `Hola ${nombre}!

    Bienvenidos a "Ultimate JavaScript" :)

    Saludos Nico.
    `
};

console.log(plantilla('Chanchito feliz'));