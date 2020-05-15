var connect = require("../config/connect");
var dbase = "reviewsystem";
var collec = "employee";

module.exports.find=function(where, cb){
    connect(function (err, client) {
        var db = client.db(dbase);
        db.collection(dbase).find(where).toArray(cb);
    });
}

module.exports.update=function(where, obj, cb){
    connect(function (err, client) {
        
        var db = client.db(dbase);
        db.collection(dbase).updateOne(where, {obj}, cb)
    });
}
module.exports.delete=function(where, cb){
    connect(function (err, client) {
        var db = client.db(dbase);
        db.collection(dbase).remove(where, cb);
        
    });
}
module.exports.insert=function(obj, cb){
    connect(function (err, client) {
        var db = client.db(dbase);
        db.collection(dbase).insertOne(obj, cb);

    });
}