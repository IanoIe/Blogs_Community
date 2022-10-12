var express = require('express');
var router = express.Router();
var blogModel = require("../models/blogsModel");



router.get('/', function(req, res, next){
    console.log(req.query)
    blogModel.blogs(req.query, function(status, result){
        if (status.code == 200)
        res.send(result);
        else {
            res.statusMessage = status.status;
            res.status(status.code).send(result);
        }
    });
})


module.exports = router;