const TABLA = 'clientes';
const auth = require('../auth')

module.exports = function (dbinyectada){

    let db = dbinyectada
    
    if(!db){
        db = require('../../DB/mysql');
    }

    function clientes (){
        return db.clientes(TABLA);
    }
    
    function uno (id){
        return db.uno(TABLA, id);
    }
    
    async function agregar (body){
        const correo = {
            id: body.id,
            usuario: body.usuario,
            id_tablero: body.id_tablero
        }

        const respuesta = await db.agregar(TABLA, correo);

        var insertId = 0;
        if(body.id == 0){
            insertId = respuesta.insertId;
        }else{
            insertId = body.id;
        }

        var respuesta2 = '';
        if(body.correo || body.password){
            respuesta2 = await auth.agregar({
                id: insertId,
                correo: body.correo,
                password: body.password,
            })
        }

        return respuesta2;
    }


    
    function eliminar (body){
        return db.eliminar(TABLA, body);
    }

    return {
        clientes,
        uno,
        agregar,
        eliminar
    }
}