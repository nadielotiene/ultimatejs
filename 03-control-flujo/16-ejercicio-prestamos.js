let cuenta = true;
let puntaje = 720;
let tasa;

    if (puntaje >= 750) {
        tasa = 10;
    } else if (puntaje >= 700 && puntaje <= 749) {
        tasa = 15;
    } else if (puntaje >= 650 && puntaje <= 699) {
        tasa = 20;
    } else {
        console.log("no podemos ofrecer un préstamo")
    }

console.log("tasa base", tasa)

if (tasa !== undefined) {
    if (cuenta && tasa >= 15) {
        tasa -= 10
    }
    console.log(`Tasa de interés aprobada: ${tasa}%`)
}
