const { match } = require("assert")
const express = require("express")
    const Routers = express.Router()

const listaPCadastrado = [{
id:1,
nomeCompleto:"Pedro henrique",
idade:18,
email:"pedro123@gmail.com",
telefone: 6140228922
},
{
id:2,
nomeCompleto: "Rafael Henrique",
idade:23,
email:"rafherique582@gmail.com",
telefone:628257361
},
{
id:3,
nomeCompleto: "Bruno Maximoff",
idade:23,
email:"BMaximoff@gmail.com",
telefone:646257361
}
]

Routers.get('/pessoas',(req, res) =>{
    res.json(listaPCadastrado)
})

 Routers.get('/pessoas/:id', (req, res) =>{
  let id = req.params.id
  let cadastroencontardo = listaPCadastrado.find(cadastro => cadastro.id == id)
    res.json(cadastroencontardo)
 })
 
  Routers.post('/pessoas', (req, res ) => {
    const dados = req.body
    
    let novocadastro = {
        id: Math.round(Math.random() * 1000),
        nomeCompleto: dados.nomeCompleto,
        idade: dados.idade,
        email: dados.email,
        telefone: dados.telefone

    }
    listaPCadastrado.push(novocadastro)
    res.json("cadastro feito com sucesso!")
})
 
Routers.put("/pessoas/:id", (req, res) =>{
    let id = req.params.id
    let dados = req.body
    let index = listaPCadastrado.findIndex(cadastro => cadastro.id == id)
    let novocadastro = {
        id: Math.round(Math.random() * 1000),
        nomeCompleto: dados.nomeCompleto,
        idade: dados.idade,
        email: dados.email,
        telefone: dados.telefone}


    listaPCadastrado[index] = novocadastro
      res.json("Novo cadastro atualizado")
})

  Routers.delete('/pessoas/:id', (req, res) =>{
    let id = req.params.id
    listaPCadastrado.splice(id, 1)
    res.json({mensagem:"Cadastro cancelado"}) 
})

module.exports = Routers