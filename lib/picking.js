var S = require('string');
var Cral = require('crawler');

exports.picking = function(hostname, url, res){
    var config = require('./config')[hostname];

    if(!config){
        return res.status(500).jsonp({ error: 'unknown url!', uri: url});
    }

    var crawler = new Cral.Crawler();
    crawler.queue([{
        uri: url,
        incomingEncoding : config.incomingEncoding,
        userAgent: config.userAgent,
        forceUTF8 : true,
        callback : function(error,result,$) {
            if(error){
                return res.status(500).jsonp({ error: 'callback err!', uri: url});
            }
            var title, price, brand, imgs;
            title = boxing($, config.title);
            price = boxing($, config.price);
            brand = boxing($, config.brand);
            imgs = boxing($, config.img);
            //res.render('index', { title: title, price: price, shop: brand, img: imgs });
            res.jsonp({ title: title, price: price, brand: brand, img: imgs });
        }
    }]);
};

var boxing = function($, config){
    var value;
    if(config[0] === 'text'){
        value = S($(config[1]).html()).stripTags().decodeHTMLEntities().s;
    }else if(config[0] === 'attr'){
        value = $(config[1]).attr(config[2]);
    }else if(config[0] === 'html'){
        value = S($(config[1]).html()).between(config[2], config[3]).stripTags().decodeHTMLEntities().s;
    }else if(config[0] === 'static'){
        value = config[1];
    }else if(config[0] === 'join'){
        value = S($(config[1]).html()).stripTags().decodeHTMLEntities().s + ' - ' + S($(config[2]).html()).stripTags().decodeHTMLEntities().s;
    }else{

    }
    return S(value).trim().s;
};