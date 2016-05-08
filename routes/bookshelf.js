/**
 * Created by Kevin on 2016/4/29.
 */
// In a file named something like bookshelf.js
var dbConfig = {
    client: 'pg',
    // connection:process.env.DATABASE_URL
    connection: {
        host: 'ec2-54-243-63-195.compute-1.amazonaws.com',
        user: 'vlwnhvzahpljwk',
        password: 'qKyJ6g1Z2UzbgLcbzCishijr0d',
        database: 'dkkgl4n602v55',
        charset: 'utf8',
        ssl: true
    }
    /*connection: {
     host: '127.0.0.1',
     user: 'postgres',
     password: '930709',
     database: 'XiyoujiDB',
     charset: 'utf8'
     }*/
};
var knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);
