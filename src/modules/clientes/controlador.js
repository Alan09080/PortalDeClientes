const CLIENTES = 'clientes';
const auth = require('../auth')

module.exports = function (dbinyectada){

    let db = dbinyectada
    
    if(!db){
        db = require('../../DB/mysql');
    }

    function clientes (){
        return db.clientes(CLIENTES);
    }
    
    function uno (id){
        return db.uno(CLIENTES, id);
    }
    
    async function agregar (body){
        const usuario = {
            id: body.id,
            correo: body.correo,
            id_tablero: body.id_tablero
        }

        const respuesta = await db.agregar(CLIENTES, usuario);

        var insertID = 0;
        if(body.id == 0){
            insertID = respuesta.insertID;
        }else{
            insertID = body.id;
        }

        if(body.usuario || body.pass){
            await auth.agregar({
                id: insertID,
                usuario: body.usuario,
                pass: body.usuario
            })
        }

        return 
    }


    
    function eliminar (body){
        return db.eliminar(CLIENTES, body);
    }

    return {
        clientes,
        uno,
        agregar,
        eliminar
    }
}