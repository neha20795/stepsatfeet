var express = require("express");
var routes = express.Router();
var Employeer = require("../../models/employeer");
var jwt = require("jsonwebtoken");
var sha1 = require("sha1");

routes.post("/", function(req, res){
    console.log("Inside Employeer");
    console.log(req.body);
    var e = req.body.email;
    
    Employeer.find({email : e}, function(err, result){
        if(err){
            console.log("Error Find")
            msg = 'Something went wrong';
            return res.status(401).send({
                success : false,
                msg
            });
        }
        else if(result.length == 1)
        {
            console.log("Result Length")
            msg = 'User Already Exists';
            return res.status(401).send({
                success : false,
                msg
            });
        }
        else{
            console.log("in");
            req.body.password = sha1(req.body.password);
            Employeer.insert(req.body, function(err, result){
                if(err){
                    msg = 'Something went wrong';
                    return res.status(401).send({
                        success : false,
                        msg
                    });
                }
                else{
                    msg = 'Your have signed-up succesfully';
                    return res.status(200).send({
                        success : true,
                        msg
                    });
                }
            });
        }
    });
    
});

routes.post("/orglogin", function(req, res){
    console.log(req.body);
    var e = req.body.username;
    var p = req.body.password;
    console.log(e+" "+p);
    Employeer.find({ email : e }, function(err, result){
        console.log("in");
        if(result.length == 1)
            {
                if(result[0].password == sha1(req.body.password))
                {
                    console.log("Match");
                    console.log(result[0]);
                    var detail = {
                        _id: result[0]._id ,
                        fname:result[0].fname ,
                        lname:result[0].lname ,
                        dob:result[0].dob ,
                        email:result[0].email ,
                        address: result[0].address,
                        organization: result[0].organization ,
                        qualification:result[0].qualification,
                        mobile:result[0].mobile,
                        experience:result[0].organization,
                        gender: result[0].gender,
                        image: result[0].image
                    }
                    var token = jwt.sign({ id : result[0]._id, name : result[0].full_name}, "this is my secret key", { expiresIn : 3600});
                    res.status(200).send({
                        success : true,
                        detail,
                        token
                    });
                }
                else
                {
                    console.log("Password");
                    res.status(401).send({
                        success: false,
                        msg: "This Password Incorrect"
                    });    
                }
            }
            else{
                console.log("Username");
                res.status(401).send({
                    success : false,
                    msg : "This Username and Password Incorrect"
                });
            }
        });

    });

    routes.get("/orgsearch/:name", function(req,res){
        var name =  req.params.name;
        console.log(name);
        Employeer.find({ organization_name : name }, function(err, result){
            console.log("in");
            if(result.length >= 1)
            {
              var detail = new Array();
              console.log(result[0]);
                  for(x=0;x<result.length;x++)
                  {
                    var detail1 = {
                      organization_name : result[x].organization_name,
                      address : result[x].address,
                      contact : result[x].contact,
                      employeeCapacity :result[x].employeeCapacity,
                      photos :result[x].photos,
                      email : result[x].email
                    }
                    detail.push(detail1);
                  }
                        res.status(200).send({
                            success : true,
                            detail
                        });
            }
            else{
                console.log("Not found");
                res.status(401).send({
                     success : false,
                     msg : "Search for relevant info"
                });
            }
        });
    })

    routes.get("/orgdetail/:email", function(req,res){
        //code here;
        var name =  req.params.email;
        console.log(name);
        Employeer.find({ email : name }, function(err, result){
            if(result.length >= 1)
            {
                var detail = {
                    organization_name : result[0].organization_name,
                      address : result[0].address,
                      contact : result[0].contact,
                      employeeCapacity :result[0].employeeCapacity,
                      photos :result[0].photos,
                      email : result[0].email,
                      director : result[0].director,
                      ceo : result[0].ceo,
                      safetyRating : result[0].safetyRating
                }
                console.log(detail)
                res.status(200).send({
                    success : true,
                    detail
                });
            }
            else{
                console.log("Not found");
                res.status(401).send({
                     success : false,
                     msg : "Search for relevant info"
                });
            }
        });
    });

    routes.get("/orgall", function(req,res){
        // var name =  req.params.name;
        // console.log(name);
        Employeer.find({  }, function(err, result){
            console.log("in");
            if(result.length >= 1)
            {
              var detail = new Array();
              console.log(result[0]);
                  for(x=0;x<result.length;x++)
                  {
                    var detail1 = {
                      organization_name : result[x].organization_name,
                      address : result[x].address,
                      contact : result[x].contact,
                      employeeCapacity :result[x].employeeCapacity,
                      photos :result[x].photos,
                      email : result[x].email
                    }
                    detail.push(detail1);
                  }
                        res.status(200).send({
                            success : true,
                            detail
                        });
            }
            else{
                console.log("Not found");
                res.status(401).send({
                     success : false,
                     msg : "Search for relevant info"
                });
            }
        });
    });
    routes.get("/orgonedetail/:name", function(req,res){
        var name =  req.params.email;
        console.log(name);
        Employeer.find({ email : name }, function(err, result){
            console.log("in");
            if(result.length >= 1)
            {
              var detail = new Array();
              console.log(result[0]);
                  for(x=0;x<result.length;x++)
                  {
                    var detail1 = {
                      organization_name : result[x].organization_name,
                      address : result[x].address,
                      contact : result[x].contact,
                      employeeCapacity :result[x].employeeCapacity,
                      photos :result[x].photos,
                      email : result[x].email
                    }
                    detail.push(detail1);
                  }
                        res.status(200).send({
                            success : true,
                            detail
                        });
            }
            else{
                console.log("Not found");
                res.status(401).send({
                     success : false,
                     msg : "Search for relevant info"
                });
            }
        });
    })
routes.post("/addimage/:email", function (req, res) {
    var em = req.params.email;
    console.log(req.body.image);
    console.log("Body--"+req.body);
    Employeer.updateSet({email : em}, req.body, function (err, result) {
        if(err){
            console.log(err);
            res.status(401).send({
                success : false,
                msg : "Search for relevant info"
            });
        }
        else{
            console.log(result);
            res.status(200).send({
                success : true,
                msg : "updated"
            });
        }
    })
})

module.exports=routes;
