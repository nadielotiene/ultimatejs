function Usuarios(nombre, apellido, fechaNacimiento, direccion, edad, paisNacimiento, suscripcionActiva) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
    this.edad = edad;
    this.paisNacimiento = paisNacimiento;
    this.suscripcionActiva = suscripcionActiva;
}

let usuario1 = new Usuarios("Chanchito", "Feliz", "10 de abril de 1992", "Av. Siempre Viva 742", 31, "México", true);
let usuario2 = new Usuarios("Chanchito", "Triste", "25 de junio de 1985", "Calle Luna 123", 38, "España", false);
let usuario3 = new Usuarios("Felipe", "Schurmann", "3 de septiembre de 2000", "Boulevard del Sol 456", 23, "Argentina", true);

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);