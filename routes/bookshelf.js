/**
 * Created by Administrator on 2016/4/29.
 */
// In a file named something like bookshelf.js
var dbConfig = {
    client: 'pg',
    connection:process.env.DATABASE_URL
};
var knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);
