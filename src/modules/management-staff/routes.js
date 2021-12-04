
/*
const express = require('express');

class CollegeManagemntController {
    router;
    constructor() {
        this.router = express.Router();
        this.initialiseRouter();
    }
    initialiseRouter() {
        this.router.get('/college', this.ss);
    }
    
    ss(req, res) {
        
        console.log(res.send);
       res.send("Response Called");
    }
}

module.exports = CollegeManagemntController;

*/

const express = require('express');
const managementStaffService = require('./services');
const ManagemtStaffService = new managementStaffService();
class ManagementStaffRoutes {
    constructor() {
        this.router = express.Router();
        this.router.post('/management-staff', this.#createManagementStaff)
        this.router.post('/management-staff/login', this.#loginToManagementStaff)
    }
    
    /*
        It will take the nececarry input, --> On Routes.js
        it will validate whether the input is valid or not
        if all valid, then insert the entries into DB and respond with success message
        if not valid, we send error message
    */

    #createManagementStaff(req, res) {
        console.log(req.body);
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            email: req.body.email,
            dob: req.body.DOB
        }
        const response = ManagemtStaffService.createManagementStaff(data);
        res.status(response.statusCode);
        res.send(response);
    }

     /*
        It will take the nececarry input, --> On Routes.js
        it will validate whether the input is valid or not
        if all valid, check the entry on DB, if present give the success Response
        else send invalid Crediantials
    */

    #loginToManagementStaff(req, res) {
        const data  = {
            email: req.body.email,
            password: req.body.password
        }
        const response = ManagemtStaffService.loginManagementStaff(data)
        console.log(response);
        res.status(response.statusCode)
        res.send(response);
    }
}

module.exports = ManagementStaffRoutes;
