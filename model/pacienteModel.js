/*Importando o sequelize */
const sequelize = require('sequelize');

/* Importando a conexão com o banco de dados*/
const connection = require('../database/database');
/* 
DEFINIÇÃO DA ESTRUTURA DA TABELA PACIENTE 
PARAMETROS:
1 - NOME DA TABELA
2 - UM OU MAIS OBJETOS JSON QUE VÃO REPRESENTAR OS CAPOS, SEUS TIPOS E
    REGRAS DE PREENCHIMENTO
*/
const paciente = connection.define(
    'tbl_paciente',
    {
        cod_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        nome_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        telefone_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        celular_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        email_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        foto_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        nome_responsavel:{
            type: sequelize.STRING(500),
            allowNull:true
        },
        telefone_responsavel:{
            type: sequelize.STRING(500),
            allowNull:true
        },
    }
);

//paciente.sync({force:true});

module.exports = paciente;