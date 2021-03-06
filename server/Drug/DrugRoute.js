var express     = require('express');
var router      = express.Router();
var Controller  = require('./DrugController');

router.post('/insertDrug', (req, res) => {
    Controller.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.get('/getAllDrugs', (req, res) => {
    Controller.getAllDrugs().then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

module.exports = router;