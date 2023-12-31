const express = require('express');
const pacienteModel = require('../model/pacienteModel');
const upload = require('../helpers/upload/upload');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE PACIENTE (POST)*/
router.post('/paciente/inserir', upload.array('foto', 1),(req,res)=>{
    let {cod_paciente, nome_paciente, telefone_paciente,celular_paciente,email_paciente, nome_responsavel,telefone_responsavel} = req.boby;
    let foto_paciente = req.files[0] .path; 

    pacienteModel.create(
        {
            cod_paciente,
            nome_paciente,
            telefone_paciente,
            celular_paciente,
            email_paciente,
            foto_paciente,
            nome_responsavel,
            telefone_responsavel,        
        }
    ).then(
        ()=>{
            return res.status(201).json({
            errorStatus:false,
            mensageStatus:'PACIENTE CADASTRADO COM SUCESSO'
            });
        }   
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

/* ROTA DE SELEÇÃO DE PACIENTE(GET)*/
router.get('/paciente/selecionar', (req,res)=>{
    
    pacienteModel.findAll()
    .then(
        (paciente)=>{
            console.log(paciente);
            res.json(paciente);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});
router.get('/paciente/selecionar/:id', (req,res)=>{
    let {id} =req.params;
    pacienteModel.findByPk(id)
    .then(
        (paciente)=>{
            console.log(paciente);
            res.json(paciente);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

router.get('/paciente/selecionar/:nome_paciente', (req,res)=>{
    let {nome_paciente} = req.params;
    pacienteModel.findOne({where:{nome_paciente:nome_paciente}})
        .then(
            (paciente)=>{
                res.json(paciente);
            }
        )
        .catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );
});


/* ROTA DE ALTERAÇÃO DE PACIENTE(PUT)*/
router.put('/paciente/alterar', (req,res)=>{

        let {cod_paciente,nome_paciente, telefone_paciente,celular_paciente,
        email_paciente,foto, nome_responsavel,telefone_responsavel} = req.body;

    pacienteModel.update(
        {
            cod_paciente,
            nome_paciente,
            telefone_paciente,
            celular_paciente,
            email_paciente,
            foto,
            nome_responsavel,
            telefone_responsavel,
        },
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'PACIENTE ALTERADO COM SUCESSO'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

/* ROTA DE EXCLUSÃO DE PACIENTE(DELETE)*/
router.delete('/paciente/excluir/:id', (req,res)=>{
    
    let id = req.params.id;
    console.log('ID: ' + id);

    pacienteModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'PACIENTE EXCLUIDO COM SUCESSO'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;