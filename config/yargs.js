const opts = {
    base: {  // parametro --base
        demand: true,  //obliga q si llamas listar tengas q dar base
        alias: 'b'     //uso abreviado -b en vez de --base
    },
    limite: { // parametro --limite
        alias: 'l',
        default: 10
    }
}



const argv = require('yargs')
            //agregamos un comando: node app.js listar
            .command('listar','Imprime en consola la tabla de multiplicar', opts) 
            .command('crear', 'Crea un fichero con la tabla de multiplicar', opts)  
            .help()  //Crea la documentacion automaticamente
            .argv;


module.exports = {
    argv
}