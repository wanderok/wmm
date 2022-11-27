// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
const express = require('express');
const server = express();

const User = require('./models/User');
const Cliente = require('./models/Cliente');

server.use(express.json());

// define a porta onde o servidor vai escutar requisições
server.listen(3000,() =>{
    //console.log('Servidor está funcionando...')
});

server.post("/cadastrarConfig", )
//requisição get
// res = requisição que chegará ao servidor
// res = resposta retornada pelo servidor
/*
server.get('/',(req,res) => {
  return res.json({mensagem: 'Nossa APi está funcionando...'}) 
});
*/

/*
server.get('/Users',(req,res) => {
    const users = await User.findAll();
    console.log(users.every(user => user instanceof User));
    console.log("All uses:",JSON.stringify(users,null,2));
    return JSON.stringify(users,null,2) 
  });
*/

//console.log(users.every(user => user instanceof User));
//console.log("All uses:",JSON.stringify(users,null,2));

server.get('/users',async(req,res) => {
    const u = await User.findAll();
    //console.log(u.every(u => u instanceof User));
    //console.log("All uses",JSON.stringify(u,null,2));

    return res.send(JSON.stringify(u,null,2)) 
});

server.get('/clientes',async(req,res) => {
    const c = await Cliente.findAll({
        attributes: ['CODIGO','NOME','FANTASIA','FONE','CONTATO']
    });
    //console.log(c.every(c => c instanceof Cliente));
    //console.log("All uses",JSON.stringify(c,null,2));

    return res.send(JSON.stringify(c,null,2)) 
});

server.get('/clientesAtivos',async(req,res) => {
    const c = await Cliente.findAll({
        attributes: ['CODIGO','NOME','FANTASIA','FONE','CONTATO'],
        where:{
            STATUS: 'ATIVO'
        }
    });
    return res.send(JSON.stringify(c,null,2)) 
});

server.get('/clientesInativos',async(req,res) => {
    const c = await Cliente.findAll({
        attributes: ['CODIGO','NOME','FANTASIA','FONE','CONTATO'],
        where:{
            STATUS: 'INATIVO'
        }
    });
    return res.send(JSON.stringify(c,null,2)) 
});







/*
function Home(){
    return <div>Licenses testes</div>
}

export default Home
*/