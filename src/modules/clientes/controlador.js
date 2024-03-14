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
        const usuario = {
            id: body.id,
            correo: body.correo,
            id_tablero: body.id_tablero
        }

        const respuesta = await db.agregar(TABLA, usuario);

        var insertId = 0;
        if(body.id == 0){
            insertId = respuesta.insertId;
        }else{
            insertId = body.id;
        }

        var respuesta2 = '';
        if(body.usuario || body.password){
            respuesta2 = await auth.agregar({
                id: insertId,
                usuario: body.usuario,
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