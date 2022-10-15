const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const temas = require("./src/temas/temas.json");

app.get("/temas",(req,res) => {
    return res.json(temas);
})

app.listen(port, ()=>{
    console.log("Servidor rodando!")
});