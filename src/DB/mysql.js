const mysql = require('mysql');
const config = require('../config');
const { error } = require('console');
const { resolve } = require('path');
const { rejects } = require('assert');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

function conexionSQL(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if(err){
            console.log('[db err]', err);
            setTimeout(conexionSQL, 200);
        }else{
            console.log('BD conectada')
        }
    })

    conexion.on('error', err =>{
        console.log('[db err]', err);
        if(err.code === 'PROTOCOL_CONECTION_LOST'){
            conexionSQL();
        }else{
            throw err;
        }
    })
}

conexionSQL();

function clientes(tabla){
    return new Promise((resolve, rejects) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) =>{
            if(error) return rejects(error);
            resolve(result);
        })
    });
}

function uno(tabla, id){
    return new Promise((resolve, rejects) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`, (error, result) =>{
            if(error) return rejects(error);
            resolve(result);
        })
    });
}

function tableros(tabla){
    return new Promise((resolve, rejects) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) =>{
            if(error) return rejects(error);
            resolve(result);
        })
    });
}

function untablero(tabla, id){
    return new Promise((resolve, rejects) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`, (error, result) =>{
            if(error) return rejects(error);
            resolve(result);
        })
    });
}


module.exports = {
    clientes,
    uno,
    tableros,
    untablero
}