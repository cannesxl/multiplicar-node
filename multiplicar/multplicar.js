const fs = require('fs');
const colors = require('colors');


let listTabla = (base, limite = 10) =>{
    return new Promise((resolve, reject) =>{

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let dataTabla = '';
        
        console.log('====================================='.green)
        console.log(`        tabla de ${base }`.green)
        console.log('====================================='.green)
        
        for (let i = 0; i <= limite; i++) {
            dataTabla += `${base} x ${i} = ${base * i } \n`;
        }
        resolve(dataTabla);
    });
};



let crearArchivo = (base, limite=10) =>{

    return new Promise( (resolve, reject)=>{

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let dataTabla = '';
        for (let i = 0; i <= limite; i++) {
            dataTabla += `${base} x ${i} = ${base * i } \n`;
        }
                
        const data = new Uint8Array(Buffer.from(dataTabla));
        fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject (err)
            else
                resolve(`tabla-${base}.txt`);
        });
    })
};

module.exports = {
    crearArchivo,
    listTabla
}



