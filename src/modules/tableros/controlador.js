const TABLEROS = 'tableros';

module.exports = function (dbinyectada) {

    let db = dbinyectada
    if(!db){
        db = require('../../DB/mysql');
    }

    function tableros (){
        return db.tableros(TABLEROS);
    }
    
    function untablero (id){
        return db.uno(TABLEROS, id);
    }

    return{
        tableros,
        untablero,
    }
}