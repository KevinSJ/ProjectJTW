/**
 * Created by Administrator on 2016/4/29.
 */
// In a file named something like bookshelf.js
var dbConfig = {
    client: 'pg',
    connection: {
        host: 'process.env.DATABASE_URL',
        user: 'wxmrllhejzubrs',
        password: 'lb0_xWbKGJj4TxAtEUPiiz59Qc',
        database: 'd8aah13sdfn20u',
        charset: 'utf8'
    }
};
var knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);
