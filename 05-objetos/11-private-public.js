function Usuario() {
    let id = 1;
    this.name = 'Nicolas';

    let log = function() {
        console.log('logging...');
    }

    // this.log = function() {
    //     console.log('logging...');
    // }
    this.guardar = function () {
        log()
        console.log('guardando...');
    }
}

const usuario = new Usuario();
usuario.log = function() {
    console.log('lala');
}
// usuario.name;
// usuario.log();

usuario.guardar();


// En js todo lo que tenga la palabra reservada de `.this` 
// va a ser público