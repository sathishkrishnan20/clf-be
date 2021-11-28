/* 
    1. "npm init" to create package 
    2. "npm i express" to install express library 
    3. write the code to listen a new Server
 
    input params 
        1. body params -- req.body 
        2. path params -- req.params 
        3. query params -- req.query 
        4. header params -- req.get(headerName) */

const collageManagementRoutes = require('./src/modules/management-staff/routes');     
const express = require('express');

const app = express()

app.use(express.json())

const collegeManagment = new collageManagementRoutes();
 
app.use('/', collegeManagment.router);
 
app.get('/', (req, res) => {
    res.setHeader('hello', 'hee')
    res.status(200).send("Hello")  
})
 
app.listen(4000)
console.log('App is listening....');
 
 /* Create Express Application
    Create Below Endpoints teacher - POST Method - get body Parameters teacher/:teacherName - GET - get pathParameters teacher/:teacherName -> PUT -> get PathParmeters + Query Parameters*/