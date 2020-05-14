var connect = require("../config/connect");
var dbase = "reviewsystem";
var collec = "employeer";

module.exports.find=function(where, cb){
    connect(function (err, client) {
        var db = client.db(dbase);
        db.collection(collec).find(where).toArray(cb);
    });
}

module.exports.update=function(where, obj, cb){
    connect(function (err, client) {
        
        var db = client.db(dbase);
        db.collection(collec).update(where, {$set : obj}, cb)
    });
}
module.exports.delete=function(where, cb){
    connect(function (err, client) {
        var db = client.db(dbase);
        db.collection(collec).remove(where, cb);
        
    });
}
module.exports.insert=function(obj, cb){
    connect(function (err, client) {
        var db = client.db(dbase);
        db.collection(collec).insertOne(obj, cb);

    });
}