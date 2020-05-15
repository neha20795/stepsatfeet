var express = require("express");
var routes = express.Router();
var Employee = require("../../models/employee");
var jwt = require("jsonwebtoken");
var sha1 = require("sha1");

routes.post("/", function(req, res){
    var e = req.body.email;
    Employee.find({email : e}, function(err, result){
        if(err){
            msg = 'Something went wrong';
            return res.status(401).send({
                success : false,
                msg
            });
        }
        else if(result.length == 1)
        {
            msg = 'User Already Exists';
            return res.status(401).send({
                success : false,
                msg
            });
        }
        else{
            req.body.password = sha1(req.body.password);
            Employee.insert(req.body, function(err, result){
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

routes.post("/emplogin", function(req, res){
    console.log(req.body);
    var e = req.body.username;
    var p = req.body.password;
    console.log(e+" "+p);
    Employee.find({ email : e }, function(err, result){
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
                        experience:result[0].experience,
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

    routes.get("/empsearch/:name", function(req,res){
        var name =  req.params.name;
        console.log(name);
        Employee.find({ fname : name }, function(err, result){
            console.log("in");
            if(result.length >= 1)
            {
              var detail = new Array();
              console.log(result[0]);
                  for(x=0;x<result.length;x++)
                  {
                    var detail1 = {
                      fname:result[x].fname ,
                      lname:result[x].lname ,
                      email:result[x].email ,
                      address: result[x].address,
                      organization: result[x].organization ,
                      gender: result[x].gender,
                      image: result[x].image
                    }
                    detail.push(detail1);
                  }
                        res.status(200).send({
                            success : true,
                            detail
                        });
                    }
                else{
                    Employee.find({ organization : name }, function(err, result){
                        if(result.length >= 1)
                        {
                            console.log(result[0]);
                            var detail = {
                                _id: result[0]._id ,
                                fname:result[0].fname ,
                                lname:result[0].lname ,
                                email:result[0].email ,
                                address: result[0].address,
                                organization: result[0].organization ,
                                gender: result[0].gender,
                                image: result[0].image    
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
                    })
                }
            });
    })

    routes.get("/empdetail/:email", function(req,res){
        //code here;
        var name =  req.params.email;
        console.log(name);
        Employee.find({ email : name }, function(err, result){
            if(result.length >= 1)
            {
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
                    experience:result[0].experience,
                    gender: result[0].gender,
                    image: result[0].image
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
    routes.get("/updatedetail/:email", function(req,res){
        //code here;
        var name =  req.params.email;
        console.log(name);
        Employee.find({ email : name }, function(err, result){
            if(result.length >= 1)
            {
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
                    experience:result[0].experience,
                    gender: result[0].gender,
                    image: result[0].image
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

    routes.get("/allemployeedetail", function(req,res){
        var name =  req.params.name;
        console.log(name);
        Employee.find({ }, function(err, result){
            console.log("in");
            if(result.length >= 1)
            {
              var detail = new Array();
              console.log(result[0]);
                  for(x=0;x<result.length;x++)
                  {
                    var detail1 = {
                      fname:result[x].fname ,
                      lname:result[x].lname ,
                      email:result[x].email ,
                      address: result[x].address,
                      organization: result[x].organization ,
                      gender: result[x].gender,
                      image: result[x].image,
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
    
    routes.post("/empdetail/:email", function(req,res){
        //update mquery
        var em = req.params.email;
        console.log(req.body);
        var where = " email : \'"+em+"\'";
        body = "$set : { organization : \'"+req.body.organization+"\' }, $set : { experience : \'"+req.body.experience+
        "\' }, $set : { address : \'"+req.body.address+"\' }, $addToSet : {[ \'"+req.body.mobile+"\'] }";
        console.log("where : "+where);
        console.log(body);
        b = "organization : \'"+req.body.organization+"/'"
        Employee.update({email : em}, b, function(err, result){
            if(err){
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
        } )
    });
module.exports=routes;
