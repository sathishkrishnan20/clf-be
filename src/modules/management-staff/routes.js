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
