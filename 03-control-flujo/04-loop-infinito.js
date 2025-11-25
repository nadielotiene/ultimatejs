let i = 0;
while (i < 10) {
    console.log(i);
    i++; // <- Cuidado! si se quita estea linea se crea un infinite loop.
}

console.log('Fuera del while');