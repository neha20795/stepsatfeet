var express = require("express");
var routes = express.Router();
var ConfidentialReview = require("../../models/confidentialreview");

routes.get("/", function(req, res){
        if(err){
            res.statusText = 'Something went wrong';
            return res.status(406).send('Check again');
        }
        else{
            res.statusText = 'Your have signed-up succesfully';
            return res.status(200).send('You are doing a great job');
        }
});
routes.post("/", function(req, res){
    ConfidentialReview.insert(req.body, function(err, result){
        if(err){
            res.statusText = 'Something went wrong';
            return res.status(406);
        }
        else{
            res.statusText = 'Your have signed-up succesfully';
            return res.status(200);
        }
    });
});
module.exports=routes;