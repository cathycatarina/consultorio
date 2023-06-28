/*Primeiramente no index temos que importar o express e o multer*/
const express = require  ('express');
const multer = require ('multer')
/*colocar o express para ser executado*/
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));
/*Criação das rotas de paciente */
const pacienteController = require ('./controller/pacienteController');
app.use('/', pacienteController);



/*teste de rota http get 
1 - NOME DA ROTA
    2 - CALLBACK QUE EXECUTA A AÇÃO DA ROTA
*/
// app.get('/testeGET', (req, res)=>{
//     res.send('RESPOSTA DA ROTA DE HTTP GET');
// });
// app.post('/testePOST', (req, res)=>{
//     res.send('RESPOSTA DA ROTA DE HTTP POST');
// });
// app.put('/testePUT', (req, res)=>{
//     res.send('RESPOSTA DA ROTA DE HTTP PUT');
// });
// app.delete('/testeDELETE', (req, res)=>{
//     res.send('RESPOSTA DA ROTA DE HTTP DELETE');
// });*/

/*criação do servidor http */
app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});