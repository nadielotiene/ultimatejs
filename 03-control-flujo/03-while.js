// Cuales son los números pares

let i = 0;
while (i < 10) {
    if  (i % 2 == 0)  {
        console.log('Número par', i);
    }
    i++; // <- mantener fuera del if statement para evitar infinite loops
}

console.log('Fuera del while');