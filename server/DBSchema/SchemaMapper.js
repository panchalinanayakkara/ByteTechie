var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DrugSchema = new Schema({
    drugID: {
        type: String,
        default: Date.now()
    },
    drugName: {
        type: String,
        require: true
    },
   drugType: {
        type: String,
        require: true
    },
    drugCategory: {
        type: String,
        require: true
    },
    drugPrice: {
        type: Number,
        require: true
    },
    drugQuantity: {
        type: String,
        require: true
    }
});

mongoose.model('Drug', DrugSchema);

//yash
var PrescriptionSchema = new Schema({
    patientId : {
        type: Number,
        required: true
    },
    prescriptionId :{
        type: Number,
        required: true
    },
    createdDate : {
        type: String,
        required: false
    },
    prescriptionDate:{
        type: String,
        required: false
    }
})

mongoose.model('Prescription', PrescriptionSchema);
//yash

mongoose.connect('mongodb://localhost:27017/comments', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;