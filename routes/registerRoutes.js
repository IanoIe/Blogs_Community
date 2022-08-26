var express = require('express');
var router = express.Router();
var registerModel = require("../models/registeModel");


/**Router de Registo */
router.post('/register', function(req, res, next){
    registerModel.register(req.body, function(status, result){
        if (status.code == 200)
        res.send(result);
        else {
            res.statusMessage = status.status;
            res.status(status.code).send({});
        }
    });
});


module.exports = router;