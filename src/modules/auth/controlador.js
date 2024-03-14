const TABLA = 'auth';
const auth = require('../../auth');
const bcrypt = require('bcrypt');

module.exports = function (dbinyectada){

    let db = dbinyectada
    
    if(!db){
        db = require('../../DB/mysql');
    }

    async function login(correo, password){
        const data = await db.query(TABLA, {correo: correo})

        return bcrypt.compare(password, data.password)
            .then(resultado => {
                if(resultado == true){
                    return auth.asignarToken({...data})
                }else{
                    throw new Error('Información invalida')
                }
            })
    }


    async function agregar (data){

        const authData = {
            id: data.id,
        }

        if(data.correo){
            authData.correo = data.correo
        }

        if(data.password){
            authData.password = await bcrypt.hash(data.password.toString(), 5);
        }

        return db.agregar(TABLA, authData);
    };
    
    return {
        agregar,
        login,
    };
};