var express = require("express");
var routes = express.Router();
var ConfidentialReview = require("../../models/confidentialreview");

routes.get("/:name", function(req, res){
    var info = req.params.name;
        if(err){
            res.statusText = 'Something went wrong';
            return res.status(406).send('Check again');
        }
        else{
            var where = "";//write where condition that need to applied
            ConfidentialReview.find({where}, function(err, result){
                if(err){
                    res.statusText = 'Something went wrong';
                    return res.status(406);
                }
                else{
                    if(result.length>=1){
                        res.statusText = 'Your have signed-up succesfully';
                        return res.status(200);
                    }
                    else{
                        res.statusText = 'No review is available';
                        return res.status(406);
                    }
                }
            })
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