// Break es para detener una ejecución y 
// continue es para saltar una iteración.

// se puede utilizar con los loops for, for in, for of, do while.

let i = 0;
while (i < 6) {
    i++;
    if ( i === 2) {
        continue; // 1, 3, 4, 5, 6
    }
    if (i === 4) {
        break; // 1, 3
    }
    console.log(i);
}