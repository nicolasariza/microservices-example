const express = require('express');
const app = express();

const response = {
    data:[],
    services: "car service",
    architecture: "microservices"
}

const logger = message => console.log("Car service"+ message);

app.use((req,res,next)=>{
    response.data = [];
    next();
})

app.get("/api/v2/cars", (req,res)=>{
    response.data.push("Toyota", "Maserati", "Porshe");
    logger("Get car data");
    return res.send(response)
})

module.exports = app;