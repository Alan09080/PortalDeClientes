const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', async function (req, res){
    const items = await controlador.tableros()
    .then((items) => {
        respuesta.sucess(req, res, items, 200)
    })
});


router.get('/:id', async function (req, res){
    try{
        const items = await controlador.untablero(req.params.id);
        respuesta.sucess(req, res, items, 200);
    }catch(err){
        next(err);
    }
});


module.exports = router;

