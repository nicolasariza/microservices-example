const express = require('express');
const app = express();

const response = {
    data:[],
    services: "books service",
    architecture: "microservices"
}

const logger = message => console.log("Book service"+ message);

app.use((req,res,next)=>{
    response.data = [];
    next();
})

app.get("/api/v2/books", (req,res)=>{
    response.data.push("Programacion con php", "Buenas practivas de poo", "Don quijote");
    logger("Get book data");
    return res.send(response)
})

module.exports = app;