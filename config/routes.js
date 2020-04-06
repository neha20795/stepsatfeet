var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/employee/index"));


module.exports=routes;