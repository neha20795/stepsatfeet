var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

var sha1 = require("sha1");
var routes = require("./config/routes");
app.use(bodyParser());
app.use(cors());
app.use(routes);




var port = process.env.PORT || 3000;
app.listen(port, function(){    
    console.log("server running");
});
