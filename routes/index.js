var express = require('express');
var router = express.Router();
var Cral = require('crawler');
var S = require('string');
var sort = require('../lib/sorting');
var pick = require('../lib/picking');

/* GET home page. */
router.get('/', function(req, res) {
    var url = req.query.url;
    sort.sorting(url, pick.picking, res);
});

/* GET search page. */
router.get('/search', function(req, res) {
    res.render('search');
});

module.exports = router;
