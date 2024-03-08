const db = require('../../DB/mysql');

const CLIENTES = 'clientes';

function clientes (){
    return db.clientes(CLIENTES);
}

function uno (id){
    return db.uno(CLIENTES, id);
}


module.exports = {
    clientes,
    uno,
}