/**
 * Created by Administrator on 2016/4/29.
 */
// In a file named something like bookshelf.js
var dbConfig = {
    client: 'pg',
    connection: {
        url: process.env.DATABASE_URL,
        charset: 'utf8'
    }
};
var knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);
