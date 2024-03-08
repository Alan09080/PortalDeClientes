const db = require('../../DB/mysql');

const USUARIOS = 'usuarios';

function usuarios (){
    return db.usuarios(USUARIOS);
}

function uno (id){
    return db.uno(USUARIOS, id);
}


module.exports = {
    usuarios,
    uno,
}