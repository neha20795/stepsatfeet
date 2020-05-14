var express = require("express");
var routes = express.Router();

var fileupload = require("express-fileupload");
var path = require("path");

routes.use(express.static(__dirname+"/public"));

routes.use(fileupload());

routes.post("/", function(req, res){
    // console.log(req.files);
    var image = req.files.image;
    console.log(__dirname + "/angular-fileupload/src/assets/images/employee/" + image.name);
    console.log("*******************");
    console.log(path.join(__dirname, '../../'));
    let reqPath = path.join(__dirname, '../../');
    image.mv(reqPath+"stepsatfeetview/src/assets/images/employee/"+image.name, function(err){
        console.log(err);
        res.send({ name : image.name });
    });
});
routes.post("/empr", function(req, res){
    // console.log(req.files);
    var image = req.files.image;
    console.log(__dirname + "/angular-fileupload/src/assets/images/employeer/" + image.name);
    console.log("*******************");
    console.log(path.join(__dirname, '../../'));
    let reqPath = path.join(__dirname, '../../');
    image.mv(reqPath+"stepsatfeetview/src/assets/images/employeer/"+image.name, function(err){
        console.log(err);
        res.send({ name : image.name });
    });
});
module.exports=routes;