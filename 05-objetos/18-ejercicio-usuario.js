function Usuarios(nombre, apellido, fechaNacimiento, direccion, edad, paisNacimiento, suscripcionActiva) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
    this.edad = edad;
    this.paisNacimiento = paisNacimiento;
    this.suscripcionActiva = suscripcionActiva;
}

let usuario = new Usuarios("Chanchito", "Feliz", "10 de abril de 1992", "Av. Siempre Viva 742", 31, "México", true);

console.log(usuario);
