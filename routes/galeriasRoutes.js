var express = require('express');
var router = express.Router();
var galeriasModel = require("../models/galeriasModel");


/*Get all galerias */
router.get('/:id', function(req, res, next){
    galeriasModel.galerias(req.params.id, function(status, result){
        if (status.code == 200)
        res.send(result);
        else{
            res.statusMessage = status.status;
            res.status(status.code).send(result)
        }
    });
})
    

module.exports = router;