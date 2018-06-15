var path = require('path');
var express = require('express');
var router = express.Router();

//Return the Home Page
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../../client/PharmacyStock.html'));
});

module.exports = router;