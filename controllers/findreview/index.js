var express = require("express");
var routes = express.Router();
var Emptoempreview = require("../../models/emptoempreview");
var Emptoorgreview = require("../../models/orgreview")
routes.get("/:name", function(req, res){
    var info = req.params.name;
    res.status(200).send({
        success : true
    });
});

module.exports=routes;