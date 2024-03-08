const db = require('../../DB/mysql');

const TABLEROS = 'tableros';

function tableros (){
    return db.tableros(TABLEROS);
}

function untablero (id){
    return db.uno(TABLEROS, id);
}

module.exports = {
    tableros,
    untablero,
}