const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const clientes = require('./modules/clientes/rutas');
const tableros = require('./modules/tableros/rutas');
const error = require('./red/errors');

const app = express();

//middlware
app.use(morgan('dev'));

//configuración
app.set('port', config.app.port)

//rutas
app.use('/api/clientes', clientes);
app.use('/api/tableros', tableros);
app.use(error);

module.exports = app;