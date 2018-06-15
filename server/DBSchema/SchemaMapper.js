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

mongoose.connect('mongodb://localhost:27017/comments', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;