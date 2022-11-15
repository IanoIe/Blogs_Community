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


module.exports = router;