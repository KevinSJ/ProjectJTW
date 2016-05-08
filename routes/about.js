/**
 * Created by Kevin on 2016/5/7.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('about', {title: 'About'});
});

module.exports = router;
