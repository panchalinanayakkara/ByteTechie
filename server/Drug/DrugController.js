var mongoose        = require('../DBSchema/SchemaMapper');
var DrugSchema 		= mongoose.model('Drug');

var DrugController = function(){
    this.insertDrug = (data) => {
        return new Promise((resolve, reject) => {
            var drug = new DrugSchema({
                drugID: data.drugID,
                drugName: data.drugName,
                drugType: data.drugType,
                drugCategory: data.drugCategory,
                drugPrice: data.drugPrice,
                drugQuantity: data.drugQuantity
            });
            drug.save().then(() => {
                resolve({status: 200, message: "Added new drug"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })
    }

    this.getAllDrugs = () => {
        return new Promise((resolve, reject) => {
            DrugSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    } 
}

module.exports = new DrugController();