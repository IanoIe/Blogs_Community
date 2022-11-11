var express = require('express');
var router = express.Router();
var blogModel = require("../models/blogsModel");



router.get('/:id', function(req, res, next){
    blogModel.blogs(req.params.id, function(status, result){
        if (status.code == 200)
        res.send(result);
        else {
            res.statusMessage = status.status;
            res.status(status.code).send(result);
        }
    });
})

router.get('/', async function(req, res, next){
    let result = await galeriasModel.getAllGalerias();
    res.status(result.status).send(result.data);
});


module.exports = router;