let punto = {
    x: 10,
    y: 15,
};

// Se utiliza para agregar propiedades al objeto.
// De ésta manera tu podrias crear un objeto en base a 
// las propiedas de otros objetos.

// copia
let clonePunto = Object.assign({}, punto, { z: 20, x: 1 });
console.log(punto, clonePunto);

// referencia
let referencia = Object.assign(punto, { z: 20, x: 1 });
console.log(referencia);

// copia
let copiaPunto = Object.assign({}, punto);
console.log(copiaPunto, punto);

// spread operator, forma moderna
let copia3 = { ...punto };
console.log(copia3);

// forma antigua
let copia4 = {};
for (let llave in punto) {
    copia4[llave] = punto[llave];
}
console.log(copia4);