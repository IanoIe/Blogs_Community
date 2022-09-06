var express = require('express');
var router = express.Router();
var loginModel = require("../models/loginModel");

/** Router de Login */
router.post('/login', function(req, res, next){
    loginModel.login(req.body, function(status, result) {
        if (status.code == 200)
        res.send(result);
        else {
            res.statusMessage = status.status;
            res.status(status.code).send({});
        }
    });
});

/**Router de Registar */
router.post('/register', function(req, res, next){
    loginModel.registar(req.body, function(status, result) {
        if (status.code == 200)
        res.send(result);
        else {
            res.statusMessage = status.status;
            res.status(status.code).send({});
        }
    });
});

module.exports = router;