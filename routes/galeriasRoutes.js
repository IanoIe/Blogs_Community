var express = require('express');
var router = express.Router();

var galeriasModel = require("../models/galeriasModel")


/*Get all galerias */
router.get('/', async function(req, res, next){
    let result = await galeriasModel.getAllGalerias();
    res.status(result.status).send(result.data);
});


module.exports = router;