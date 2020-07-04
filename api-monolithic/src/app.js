const express = require('express');
const app = express();

const response = {
    data:[],
    services: "monolithic service",
    architecture: "monolithic"
}

app.use((req,res,next)=>{
    response.data = [];
    next();
})

app.get("/api/v1/users", (req,res)=>{
    response.data.push("Nicolas", "Jennifer", "Maria");
    return res.send(response)
})

app.get("/api/v1/books", (req,res)=>{
    response.data.push("7 habitos", "100 years", "Js code");
    return res.send(response)
})

app.get("/api/v1/cars", (req,res)=>{
    response.data.push("Dodge", "BMW", "Mercedes");
    return res.send(response)
})

module.exports = app;