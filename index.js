/* 
    1. "npm init" to create package 
    2. "npm i express" to install express library 
    3. write the code to listen a new Server
 
    input params 
        1. body params -- req.body 
        2. path params -- req.params 
        3. query params -- req.query 
        4. header params -- req.get(headerName) */


 const express = require('express')
 const app = express()
 app.use(express.json())
 app.get('/', function (req, res) { res.send('Hello World')})
 app.use('/post', require('./src/services/management-staff/routes'))
 
 /*function createStudent(req, res) { const requestBody = req.body; console.log(requestBody);
  
const firstName = requestBody.first_name; res.send('Hello Created Student for ' + firstName);}
 function getStudentByName(req, res) { console.log(req.headers); const auth = req.get('authorization'); res.send('Student Retrieved for ' + auth);} function getStudentByFirstName(req, res) { console.log(req.query) res.send('Student : ' + req.params.firstname);
 }
 
 app.post('/student', createStudent)app.get('/student', getStudentByName)app.get('/student/:firstname', getStudentByFirstName)*/app.listen(3000)
 console.log('App is listening....');
 
 /* Create Express Application
  Create Below Endpoints teacher - POST Method - get body Parameters teacher/:teacherName - GET - get pathParameters teacher/:teacherName -> PUT -> get PathParmeters + Query Parameters*/