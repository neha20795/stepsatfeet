var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/employee/index"));
routes.use("/employeer", require("../controllers/employeer/index"));
routes.use("/emptoempreview", require("../controllers/emptoempreview/index"));
routes.use("/empreview", require("../controllers/empreview/index"));
routes.use("/orgreview", require("../controllers/orgreview/index"));
routes.use("/confidentialreview", require("../controllers/empconfidentialreview/index"));
routes.use("/imageupload", require("../controllers/imageupload/index"));


module.exports=routes;