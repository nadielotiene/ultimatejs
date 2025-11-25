// Las condiciones son ejecutadas de arriba hacia abajo y
// la primera que sea realizada es la que se va a ejeutar
// y el resto van a ser ignoradas.

let edad = 15;

if (edad > 17) {
    console.log('Usuario mayor de edad');
} else if (edad > 13) {
    console.log('Usuario necesita estar acompañado de su padres');
} else {
    console.log('No puede ingresar');
}