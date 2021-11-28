import express from 'express';

class CollegeManagemntController {
    router;
    constructor() {
        this.router = express.Router();
        this.initialiseRouter();
    }
    initialiseRouter() {
        this.router.get('/college', this.ss);
    }
    
    protected ss(req, res) {
       console.log('Calling SS');
       res.send("Response Called");
    }
}

export default CollegeManagemntController;
