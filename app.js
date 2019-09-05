const {argv} = require('./config/yargs')
 


const {crearArchivo, listTabla} = require('./multiplicar/multplicar')


let comando = argv._[0];

switch (comando){

    case 'listar':
        listTabla(argv.base, argv.limite)
                .then( listado => console.log(listado))
                .catch( e => console.log(e));
        break;

    case 'crear':
            crearArchivo(argv.base, argv.limite)
                .then( archivo => console.log(`Archivo creado: ${archivo}`))
                .catch( e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}




