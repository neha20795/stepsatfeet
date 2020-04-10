var connect = require("../config/connect");
var dbase = "reviewsystem";
var collec = "employeetoemployeereview";

module.exports.find=function(cb){
    connect(function (err, client) {
        var db = client.db(dbase);
        db.collection(dbase).find().toArray(cb);
    });
}

module.exports.update=function(where, obj, cb){
    connect(function (err, client) {
        
        var db = client.db(dbase);
        db.collection(dbase).update(where, {$set : obj}, cb)
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
        db.collection(dbase).insert(obj, cb);

    });
}