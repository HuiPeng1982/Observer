var W = require('wurl');
var S = require('string');

exports.sorting = function(url, callback, res){
    if(!url){
        throw new Error("First argument expected to be a url!");
    }
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if(!url.match(regex)){
        return res.status(500).jsonp({ error: 'err url!', uri: url});
    }
    if(!callback || typeof callback !== "function"){
        throw new Error("Second argument expected to be a callback function!");
    }
    var hostname = W('hostname', url);
    return callback(hostname, url, res);
};

