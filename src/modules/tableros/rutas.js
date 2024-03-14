const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./index');

const router = express.Router();

router.get('/', tableros);
router.get('/:id', untablero);


async function tableros (req, res, next){
    try{
        const items = await controlador.tableros();
        respuesta.sucess(req, res, items, 200)
    }catch(err){
        next(err);
    }
};


async function untablero (req, res, next){
    try{
        const items = await controlador.untablero(req.params.id);
        respuesta.sucess(req, res, items, 200);
    }catch(err){
        next(err);
    }
};


module.exports = router;

