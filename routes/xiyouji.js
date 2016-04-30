/**
 * Created by Administrator on 2016/4/29.
 */
var express = require('express');
var path = require('path');
var router = express.Router();
var bookshelf = require('./bookshelf');
//
var Character = bookshelf.Model.extend({
    tableName: 'Characters'
});
var Relations = bookshelf.Model.extend({
    tableName: 'Relations'
});

var characters;
var rel;
var output;

new Character().fetchAll().then(function (characters) {
    characters = characters.toJSON();
    characters = '{"nodes"' + ":" + JSON.stringify(characters) + ',';
    output = characters;
    console.log((characters));
}).catch(function (error) {
    console.log(error);
});

new Relations().fetchAll().then(function (relations) {
    rel = relations.toJSON();
    rel = '"edges"' + ":" + JSON.stringify(rel) + '}';
    output = output + rel;
    console.log((rel));
}).catch(function (error) {
    console.log(error);
});

/* GET home page. */
router.get('/', function (req, res, next) {

    console.log(output);
    res.render('xiyouji', {json: (output)});
    //res.sendFile(path.join(__dirname, '../public', 'mainPage.html'));
});

module.exports = router;
