var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";

module.exports=function(cb){
    MongoClient.connect(dbUrl, cb);
}