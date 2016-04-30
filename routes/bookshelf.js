/**
 * Created by Administrator on 2016/4/29.
 */
// In a file named something like bookshelf.js
var dbConfig = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '930709',
        database: 'XiyoujiDB',
        charset: 'utf8'
    }
};
var knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);
