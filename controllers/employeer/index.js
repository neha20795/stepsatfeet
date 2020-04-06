var express = require("express");
var routes = express.Router();
var Employee = require("../models/product");


routes.get("/", function(req, res){
    // console.log(sha1(req.body.password));
    req.body.password = sha1(req.body.password);
    req.body.status=1;
    Employee.insert(req.body, function(err, result){
        res.json(req.body);
    });
});

module.exports=routes;