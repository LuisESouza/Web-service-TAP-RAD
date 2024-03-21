const express = require("express")

const app = express();

app.get("/", (req, res) =>{ //req - requisição res- resposta
    res.send("Funcionou &$&¨@");
})

app.post("/", (req, res) =>{
    
})
app.get("/:nome", (req, res) => {
    // res.send(`Bem vindo ${req.params.nome} com o query ${req.query.parametro}`)
    res.send({
        nome: req.params.nome
    })
})
app.listen(3000);