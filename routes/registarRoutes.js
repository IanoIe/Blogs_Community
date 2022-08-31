var express = require('express');
var router = express.Router();
var registarModel = require("../models/registarModel");


/**Router de Registo */
router.post('/registar', function(req, res, next){
    registarModel.registar(req.body, function(status, result){
        if (status.code == 200)
        res.send(result);
        else {
            res.statusMessage = status.status;
            res.status(status.code).send({});
        }
    });
});


module.exports = router;