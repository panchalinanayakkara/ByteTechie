'use strict'

var express = require('express');
var Router = express.Router();

var prescriptionController = require('./Prescription.Controller');

Router.get('/getprescriptions/:patientId', (req, res) => {
    prescriptionController.getPrescriptionByPatient(req.param.patientId).then((response) => {
        res.status(response.status).send({
            message: response.message,
            data: response.data
        })
    }).catch((error) => {
        res.status(error.status).send(error.message)
    })
}) 


Router.post('/addprescriptions/', (req, res) => {
    prescriptionController.addPrescription(req.body).then((response) => {
        res.status(response.status).send({
            message: response.message
        })
    }).catch((error) => {
        res.status(error.status).send(error.message)
    })
})

module.exports = Router;