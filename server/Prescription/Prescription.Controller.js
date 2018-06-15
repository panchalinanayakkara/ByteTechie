'use strict'

var mongoose = require('../DBSchema/SchemaMapper');

var prescriptionSchema = mongoose.model('Prescription');

var prescriptionController = function(){
    this.getPrescriptionByPatient = function(patient_Id){
        return new Promise(function(resolve, reject){
            prescriptionSchema.find({
                patientId: patient_Id
            }).exec().then( function(prescriptionData) {
                resolve({
                    status: 200,
                    message: "Fetching all the prescriptions",
                    data: prescriptionData
                });
            } ).catch(function(err){
                reject({
                    status: 500,
                    message: "Error in fetcing all the prescriptions"
                })
            })
        })
    }

    this.addPrescription = function(prescription){
        return new Promise(function(resolve, reject){
            var newPresc = new prescriptionSchema({
                    patientId: prescription.patientId,
                    prescriptionId: prescription.prescriptionId,
                    createdDate: prescription.createdDate,
                    prescriptionDate : prescription.prescriptionDate
                })
        
                newPresc.save().then(function() {
                    resolve({
                        status: 200,
                        message: "Successful!"
                    })
                }).catch(function(err){
                    reject({
                        status: 500,
                        message: "An error occured : " + err
                    })
                })
        })
    }
}

module.exports = new prescriptionController();