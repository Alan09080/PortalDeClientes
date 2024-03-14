const express = require('express');

const seguridad = require('./seguridad')
const respuesta = require('../../red/respuestas');
const controlador = require('./index');

const router = express.Router();


router.get('/', clientes);
router.get('/:id', uno);
router.put('/',seguridad(), eliminar);
router.post('/', seguridad(),agregar);



async function clientes (req, res, next){
    try{
        const items = await controlador.clientes();
        respuesta.sucess(req, res, items, 200);
    }catch(err){
        next(err);
    }
};


async function uno (req, res, next){
    try{
        const items = await controlador.uno(req.params.id);
        respuesta.sucess(req, res, items, 200);
    }catch(err){
        next(err);
    }
};

async function agregar (req, res, next){
    try{
        const items = await controlador.agregar(req.body);
        if(req.body.id == 0){
            mensaje = 'Cliente agregado con exito';
        }else{
            mensaje = 'Cliente actualizado con exito';
        }
        respuesta.sucess(req, res, mensaje, 201);
    }catch(err){
        next(err);
    }
};

async function eliminar (req, res, next){
    try{
        const items = await controlador.eliminar(req.body);
        respuesta.sucess(req, res, 'Cliente eliminado', 200);
    }catch(err){
        next(err);
    }
};


module.exports = router;

