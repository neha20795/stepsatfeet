var express = require("express");
var routes = express.Router();
var EmpReview= require("../../models/empreview");

routes.get("/:name", function(req, res){
    var info = req.params.name;
            EmpReview.find({ empidreciever : info}, function(err, result){
                if(err){
                    res.statusText = 'Something went wrong';
                    return res.status(406);
                }
                else{
                    if(result.length>=1){

                        for(x=0;x<result.length;x++){
                            var detail1 = {
                                good:result[x].good ,
                                bad:result[x].bad ,
                                position: result[x].position,
                                rating: result[x].rating
                            }
                            detail.push(detail1);
                        }
                        res.statusText = 'Review Found';
                        res.status(200).send({
                            success : true,
                            detail
                        });
                    }
                    else{
                        res.statusText = 'No review is available';
                        return res.status(406);
                    }
                }
            })
            res.statusText = 'Your have signed-up succesfully';
            return res.status(200).send('You are doing a great job');

});
routes.post("/", function(req, res){
    EmpReview.insert(req.body, function(err, result){
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