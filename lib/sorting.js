var W = require('wurl');
var S = require('string');

exports.sorting = function(url, callback, res){
    if(!url){
        throw new Error("First argument expected to be a url!");
    }
    if(!callback || typeof callback !== "function"){
        throw new Error("Second argument expected to be a callback function!");
    }
    var hostname = W('hostname', url);
    if(S(hostname).isEmpty()){
        throw new Error("This url( "+ url +" ) is illegal!");
    }
    return callback(hostname, url, res);
};

