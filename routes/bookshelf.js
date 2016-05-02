/**
 * Created by Administrator on 2016/4/29.
 */
// In a file named something like bookshelf.js
var dbConfig = {
    client: 'pg',
    connection: {
        host: process.env.DATABASE_URL,
        user: 'vlwnhvzahpljwk',
        password: 'qKyJ6g1Z2UzbgLcbzCishijr0d',
        database: 'dkkgl4n602v55',
        charset: 'utf8'
    }
};
var knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);
